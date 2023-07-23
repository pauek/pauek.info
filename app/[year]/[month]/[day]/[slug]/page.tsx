import {
  Post,
  getPostDataAsJSON,
  getPostHTML,
  loadPostPaths,
  postURLToFilename,
} from "@/model/posts";

export async function getStaticPaths() {
  return {
    paths: await loadPostPaths(),
    fallback: false,
  };
}

type Props = {
  title: string;
  date: {
    orig: string;
    short: string;
    long: string;
  };
  where: string;
  html: string;
};

type Params = {
  params: {
    year: string;
    month: string;
    day: string;
    slug: string;
  };
};
// export async function generateStaticParams({ params }: Params) {
//   const filename = postURLToFilename(params);
//   const { title, date, where } = await getPostDataAsJSON(filename);
//   const html = await getPostHTML(filename);
//   return {
//     props: { title, date, where, html } as Props,
//   };
// }

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
