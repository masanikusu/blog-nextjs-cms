import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-800">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only"></span>
            {/* ロゴ */}
            {/* <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            /> */}
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-base font-bold leading-3 text-white"
          >
            Home
          </Link>
          <Link
            href="/post"
            className="text-base font-bold leading-3 text-white"
          >
            Posts
          </Link>
          <Link
            href="/project"
            className="text-base font-bold leading-3 text-white"
          >
            Project
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
    </header>
  );
};

export default Header;
