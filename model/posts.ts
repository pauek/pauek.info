import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const postsDir = path.join(process.cwd(), "posts");
const dateFmtShort = new Intl.DateTimeFormat("es-es", {
  year: "numeric",
  month: "short",
});

const dateFmtLong = new Intl.DateTimeFormat("es-es", {
  year: "numeric",
  month: "long",
});

export type PostURLParams = {
  year: string;
  month: string;
  day: string;
  slug: string;
};

export const postURLToFilename = ({
  year,
  month,
  day,
  slug,
}: PostURLParams) => {
  return `${year}-${month}-${day}-${slug}.md`;
};

export const postPiecesToPath = ({ year, month, day, slug }: PostURLParams) => {
  return `/${year}/${month}/${day}/${slug}`;
};

const moreRecent = (p: Post, q: Post) => {
  const pdate = new Date(p.date.orig);
  const qdate = new Date(q.date.orig);
  return qdate.getTime() - pdate.getTime();
};

// FIXME: Mejorar el filtro!
const isPost = (filename: string) =>
  filename.endsWith(".md") && !filename.startsWith("_");

const parsePostFilename = (filename: string) => {
  const parts = filename.replace(/.md$/, "").split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  const slug = parts.slice(3).join("-");
  const date = `${year}-${month}-${day}`;
  return { year, month, day, slug, date };
};

export type Post = {
  id: string;
  title: string;
  where: string;
  date: {
    orig: string;
    short: string;
    long: string;
  };
  url: string;
};

export async function getPostDataAsJSON(filename: string): Promise<Post> {
  const pieces = parsePostFilename(filename);
  const { date, slug } = pieces;
  const abspath = path.join(postsDir, filename);
  const bytes = await readFile(abspath, "utf-8");
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
    url: postPiecesToPath(pieces),
  };
}

export async function getPostHTML(filename: string) {
  const abspath = path.join(postsDir, filename);
  const bytes = await readFile(abspath, "utf-8");
  const { content } = matter(bytes);
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);
  return processed.toString();
}

export const loadPostFilenames = async () =>
  (await readdir(postsDir)).filter(isPost);

export const loadPostData = async () =>
  (await loadPostFilenames()).map(parsePostFilename);

export const loadPostPaths = async () =>
  (await loadPostData()).map(postPiecesToPath);

const isFulfilled = <T>(
  p: PromiseSettledResult<T>
): p is PromiseFulfilledResult<T> => p.status === "fulfilled";

export async function loadSortedPosts(): Promise<Array<Post>> {
  let files = await readdir(postsDir);
  let results = await Promise.allSettled(
    files.filter(isPost).map(getPostDataAsJSON)
  );
  let posts = results.filter(isFulfilled).map((r) => r.value);
  posts.sort(moreRecent);
  return posts;
}
