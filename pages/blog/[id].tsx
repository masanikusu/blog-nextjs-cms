import { client } from "../../libs/client";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { formatDate } from "../../utils/formatDate";

// テンプレートに受け渡す処理
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blog",
    contentId: id,
    queries: { filters: `category[equals]${id}` },
  });

  return {
    props: {
      blog: data,
    },
  };
};

// SSGのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog }) {
  return (
    <>
      <Header />
      <article>
        <div className="min-h-screen bg-gray-100 py-8 flex  relative overflow-hidden lg:py-12">
          <div className="bg-white relative w-full px-6 py-12 ring-1 ring-gray-100 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pb-28">
            <div className="prose prose-slate mx-auto lg:prose-lg">
              <h2 className="lead text-center text-slate">{blog.title}</h2>
              <div className="flex items-center gap-x-4 text-sm">
                <p className="text-gray-800">
                  投稿日：{formatDate(blog.publishedAt)}
                </p>
                {blog.tag.map((tag) => (
                  <p key={tag.id} className="text-gray-800">
                    タグ：{tag.name}
                  </p>
                ))}
              </div>
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-500 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"/>
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
