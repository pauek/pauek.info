import {
  BlogPostList,
  Education,
  Presentation,
  Projects,
  Publications,
  Teaching,
} from "@/components";
import { loadPosts } from "@/model/posts";

export default async function Home() {
  const posts = await loadPosts();
  return (
    <div id="content">
      <Presentation />
      <Teaching />
      <Education />
      <BlogPostList posts={posts} />
      <Projects />
      <Publications />
    </div>
  );
}
