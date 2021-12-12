import {
  getPostDataAsJSON,
  getPostHTML,
  loadPostPaths,
  postURLToFilename,
} from "../../../../model/posts";

export async function getStaticPaths() {
  return {
    paths: await loadPostPaths(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filename = postURLToFilename(params);
  const { title, date, where } = getPostDataAsJSON(filename);
  const html = await getPostHTML(filename);
  return {
    props: { title, date, where, html },
  };
}

export default function PostPage(props) {
  return (
    <div id="content">
      <div id="post">
        <h1>{props.title}</h1>

        <time className="fecha">
          {props.where}, {props.date.long}
        </time>

        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      </div>
    </div>
  );
}
