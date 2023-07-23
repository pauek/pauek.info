import {
  getPostDataAsJSON,
  getPostHTML,
  postURLToFilename,
} from "@/model/posts";

type Params = {
  params: {
    year: string;
    month: string;
    day: string;
    slug: string;
  };
};

export default async function PostPage({ params }: Params) {
  const filename = postURLToFilename(params);
  const { title, date, where } = await getPostDataAsJSON(filename);
  const html = await getPostHTML(filename);
  return (
    <div id="content">
      <div id="post">
        <h1>{title}</h1>
        <time className="fecha">
          {where}, {date.long}
        </time>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
