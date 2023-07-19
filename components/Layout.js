import Link from "next/link";

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', options);
};

const Layout = ({ blog }) => {

  return (
    <>
      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-slate-600">
              Learn how to grow with using technology.
            </p>
          </div>
          {/* content */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blog.map((data) => (
              <article
                key={data.id}
                className="bg-slate-800 rounded-lg flex max-w-xl flex-col items-start justify-between elative w-full px-6 py-12 ring-1 ring-gray-900"
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-indigo-400">
                    <Link href={`blog/${data.id}`}>
                      <span className="absolute inset-0" />
                      {data.title}
                    </Link>
                  </h3>
                </div>
                <div className="flex items-center gap-x-4 text-xs pt-6">
                  <time dateTime={data.publishedAt} className="text-gray-200">
                    {formatDate(data.publishedAt)}
                  </time>
                  <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    Category
                    {/* {data.category.name ? data.category.name : ''} */}
                  </span>

                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
