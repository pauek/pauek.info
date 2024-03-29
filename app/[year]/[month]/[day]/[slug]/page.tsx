import {
  PostURLParams,
  getPostDataAsJSON,
  getPostHTML,
  loadPostData,
  postURLToFilename,
} from "@/model/posts";

type Params = {
  params: PostURLParams;
};

export default async function PostPage({ params }: Params) {
  const filename = postURLToFilename(params);
  const { title, date, where } = await getPostDataAsJSON(filename);
  const html = await getPostHTML(filename);
  return (
    <div id="content">
      <div id="post">
        <h1 className="text-4xl mt-20 mb-2">{title}</h1>
        <time className="fecha">
          {where}, {date.long}
        </time>
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await loadPostData();
  return posts;
}
