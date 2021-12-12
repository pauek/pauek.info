
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const postsDir = path.join(process.cwd(), 'posts')
const dateFmtShort = new Intl.DateTimeFormat('es-es', {
  year: 'numeric',
  month: 'short',
});

const dateFmtLong = new Intl.DateTimeFormat('es-es', {
  year: 'numeric',
  month: 'long',
})

export const postURLToFilename = ({ year, month, day, slug }) => {
  return `${year}-${month}-${day}-${slug}.md`;
}

export const postPiecesToURL = ({ year, month, day, slug }) => {
  return `/${year}/${month}/${day}/${slug}`;
}

const moreRecent = (p, q) => (new Date(q.date.orig)) - (new Date(p.date.orig));

// FIXME: Mejorar el filtro!
const isPost = (filename) => filename.endsWith('.md') && !filename.startsWith("_");

const parsePostFilename = (filename) => {
  const parts = filename.replace(/.md$/, '').split('-');
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  const slug = parts.slice(3).join('-');
  const date = `${year}-${month}-${day}`;
  return {
    year, month, day, slug, date
  }
}

export function getPostDataAsJSON(filename) {
  const pieces = parsePostFilename(filename);
  const { date, slug } = pieces;
  const abspath = path.join(postsDir, filename);
  const bytes = fs.readFileSync(abspath, 'utf-8');
  const { data: header } = matter(bytes);
  return {
    id: slug,
    title: header.title,
    where: header.where ?? null,
    date: {
      orig: date,
      short: dateFmtShort.format(new Date(date)),
      long: dateFmtLong.format(new Date(date)),
    },
    url: postPiecesToURL(pieces),
  };
}

export async function getPostHTML(filename) {
  const abspath = path.join(postsDir, filename);
  const bytes = fs.readFileSync(abspath, 'utf-8');
  const { content } = matter(bytes);
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);
  return processed.toString();
}

export async function loadPostFilenames() {
  let files = await fs.readdirSync(postsDir);
  return files.filter(isPost);
}

export async function loadPostPaths() {
  return (await loadPostFilenames()).map(f =>
    postPiecesToURL(parsePostFilename(f)));
}

export async function loadPosts() {
  let files = await fs.readdirSync(postsDir);
  let postPromises = await Promise.allSettled(files.filter(isPost).map(getPostDataAsJSON));
  let posts = postPromises.map(result => result.value);
  posts.sort(moreRecent);
  return posts;
}
