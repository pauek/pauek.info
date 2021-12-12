import Head from 'next/head';
import { BlogPostList, Projects, Teaching, Education, Presentation, Publications } from '../components';
import { loadPosts } from '../model/posts';

export async function getStaticProps() {
  const posts = await loadPosts();
  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Pauek&apos;s home page</title>
      </Head>
      <div id="content">
        <Presentation />
        <Teaching />
        <Education />
        <BlogPostList posts={posts} />
        <Projects />
        <Publications />
      </div>
    </>
  );
}
