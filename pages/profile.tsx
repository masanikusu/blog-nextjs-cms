import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-800 py-8 flex flex-col items-center justify-center relative overflow-hidden lg:py-12">
        <div className="max-w-2xl px-4 sm:px-8 flex flex-col items-center">
          <h3 className="mb-12 text-base font-semibold leading-7 text-white">
            プロフィール
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {/* Personal details and application. */}
          </p>
        </div>
        <div className="flex first-letter:mt-6 border-t border-gray-100 w-full max-w-2xl">
          <dl className="divide-y divide-gray-100 w-full">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-white">
                名前
              </dt>
              <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2">
                XXXX XXXX
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-white">
                職業
              </dt>
              <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2">
                Software Engineer
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-white">
                xxx
              </dt>
              <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2">
                xxx
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-white">
                xxx
              </dt>
              <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2">
                xxx
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-white">
                About
              </dt>
              <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2">
                改装中
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
