import { BlogPostList } from "@/components/home/BlogPostList";
import { Education } from "@/components/home/Education";
import { Presentation } from "@/components/home/Presentation";
import { Projects } from "@/components/home/Projects";
import { Publications } from "@/components/home/Publications";
import { Teaching } from "@/components/home/Teaching";
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
