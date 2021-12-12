export const BlogPostList = ({ posts }) => {
  return (
    <>
      <h2>Blog</h2>
      <div className="posts nobullet">
        <table>
          <tbody>{posts && posts.map((post) => <PostLink key={post.id} post={post} />)}</tbody>
        </table>
      </div>
    </>
  );
};

const PostLink = ({ post }) => (
  <tr>
    <td>
      <span className="date">{post.date.short}</span>
    </td>
    <td>
      <a className="post-title" href={post.url}>
        {post.title}
      </a>
    </td>
  </tr>
);
