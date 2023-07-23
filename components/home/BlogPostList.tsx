import { Post } from "@/model/posts";

type Props = {
  posts: Array<Post>;
};
export const BlogPostList = ({ posts }: Props) => {
  return (
    <>
      <h2>Blog</h2>
      <div className="posts nobullet">
        {posts && posts.map((post) => <PostLink key={post.id} post={post} />)}
      </div>
    </>
  );
};

const PostLink = ({ post }: { post: Post }) => {
  const [month, year] = post.date.short.split(" ");
  return (
    <div className="flex flex-row items-baseline p-1">
      <div className="text-stone-500 text-sm w-20 flex flex-row justify-end mr-3 ">
        <span className="pr-1">{month}</span>
        <span>{year}</span>
      </div>
      <a className="" href={post.url}>
        {post.title}
      </a>
    </div>
  );
};
