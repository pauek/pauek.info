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
    <div className="flex flex-row items-baseline pb-3">
      <div className="text-stone-500 text-sm w-[4.2rem] flex flex-row justify-end mr-3">
        <span className="pr-1">{month[0].toUpperCase()}{month.slice(1)}</span>
        <span>{year}</span>
      </div>
      <a className="flex-1" href={post.url}>
        {post.title}
      </a>
    </div>
  );
};
