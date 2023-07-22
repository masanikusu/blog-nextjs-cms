import { client } from "../libs/client";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BlogCard from "../components/items/BlogCard";

// API Request
export const getStaticProps = async () => {
  const blogs = await client.get({ endpoint: "blog" });
  const tag = await client.get({ endpoint: "tags" });

  return {
    props: {
      blog: blogs.contents,
      tag: tag.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <>
      <Header />
      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              ただのぶろぐ。
            </h2>
            <p className="mt-2 text-lg leading-8 text-slate-600">
              勉強したことや記録したいことの置き場
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="text-black ">最近の投稿</div>
            {/* content */}
            {blog.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
