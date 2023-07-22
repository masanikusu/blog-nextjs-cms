import React from "react";
import Link from "next/link";
import { Blog } from "../../interface/blogs";
import { formatDate } from "../../utils/formatDate";

const BlogCard = (props: { blog: Blog; key: string }) => {
  const blog = props.blog;
  return (
    // <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
    //     <div key={blog.id} className="group relative">
    //       <div className="rounded-lg flex max-w-xl flex-col items-start justify-between elative  px-6 py-12 ring-1 ring-gray-900  mt-6 relative h-80 w-full overflow-hidden bg-slate-800 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
    //         <h3 className="text-lg text-white">
    //           <Link href={`blog/${blog.id}`}>
    //             <span className="absolute inset-0" />
    //             {blog.title}
    //           </Link>
    //         </h3>
    //         <p className="text-base font-semibold text-gray-200">
    //           {blog.tag.map((tag) =>
    //           <span key={tag.id} className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
    //             {tag.name}
    //           </span>
    //         )}
    //         </p>
    //       </div>
    //     </div>
    // </div>
    <article key={blog.id}>
      <div className="group relative">
        <div className="bg-slate-800 rounded-lg flex max-w-xl flex-col items-start justify-between elative w-full px-6 py-12 ring-1 ring-gray-900   overflow-hidden group-hover:opacity-75 ">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-indigo-400">
            <Link href={`blog/${blog.id}`}>
              <span className="absolute inset-0" />
              {blog.title}
            </Link>
          </h3>
          <div className="flex items-center gap-x-4 text-xs pt-6">
            <time dateTime={blog.publishedAt} className="text-gray-200">
              {formatDate(blog.publishedAt)}
            </time>
            <p className="text-base font-semibold text-gray-200">
              {blog.tag.map((tag) => (
                <span
                  key={tag.id}
                  className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                >
                  {tag.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
