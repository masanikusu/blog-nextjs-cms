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

const Post = ({ blogs }: Props) => {

  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">投稿一覧</h2>
            <div className="mt-2 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"/>
            {/* contents */}
            <div className="mt-10 grid space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {blogs.map((blog) => (
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
