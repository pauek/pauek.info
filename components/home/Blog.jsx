export const Blog = ({ posts }) => {
  return (
    <>
      <h2>Blog</h2>

      <div className="posts nobullet">
        <table>
          {posts &&
            posts.map((post) => (
              <tr key={post.id}>
                <td>
                  <span className="date">{post.date}</span>
                </td>
                <td>
                  <a className="post-title" href={post.url}>
                    {post.title}
                  </a>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
};
