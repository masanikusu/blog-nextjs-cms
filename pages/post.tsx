import React from "react";
import Link from "next/link";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { client } from "../libs/client";
import BlogCard from "../components/items/BlogCard";
import { Blog, BlogTag } from "../interface/blogs";


type Props = {
  blogs: Blog[];
  tags: BlogTag[];
}

// API Request
export const getStaticProps = async () => {
  const blogs = await client.get({ endpoint: "blog" });
  const tags = await client.get({ endpoint: "tags" });

  return {
    props: {
      blogs: blogs.contents,
      tags: tags.contents,
    },
  };
};

const Post = ({ blogs, tags }: Props) => {

  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Sample Posts</h2>
            {/* contents */}
            <div className="mt-10 grid space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {blogs.map((blog) => (
                // <article key={data.id}>
                //   <div className="group relative">
                //     <div className="bg-slate-800 rounded-lg flex max-w-xl flex-col items-start justify-between elative w-full px-6 py-12 ring-1 ring-gray-900   overflow-hidden group-hover:opacity-75 ">
                //       <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-indigo-400">
                //         <Link href={`blog/${data.id}`}>
                //           <span className="absolute inset-0" />
                //           {data.title}
                //         </Link>
                //       </h3>
                //       <div className="flex items-center gap-x-4 text-xs pt-6">
                //         <time
                //           dateTime={data.publishedAt}
                //           className="text-gray-200"
                //         >
                //           {formatDate(data.publishedAt)}
                //         </time>
                //         <p className="text-base font-semibold text-gray-200">
                //           {/* {blogs.tags.map((tag) =>
                //         <span key={tag.id} className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                //           {tag.name}
                //         </span>
                //       )} */}
                //         </p>
                //       </div>
                //     </div>
                //   </div>
                // </article>
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Post;
