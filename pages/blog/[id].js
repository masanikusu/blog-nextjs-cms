import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { client } from "../../libs/client";

//SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', options);
};

export default function BlogId({ blog }) {
  return (
    <>
      <Header />
      <article>
        <div className="min-h-screen bg-gray-100 py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
          <div className="relative w-full px-6 py-12 ring-1 ring-gray-900 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pb-28">
            <div className="mt-8 prose prose-slate mx-auto lg:prose-lg">
              <p className="lead text-center text-slate">{blog.title}</p>
              <p className=" text-sm text-gray-800">{formatDate(blog.publishedAt)}</p>
              <div
                dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
                className="text-gray-900"
              ></div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
