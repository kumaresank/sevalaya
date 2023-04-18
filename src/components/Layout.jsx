import { Outlet, Link, useLocation  } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <div id="layout">
        <header className="bg-orange-800 flex flex-wrap justify-between items-center lg:px-16 px-6 lg:py-0 py-2">
          <div className="flex flex-row ">
            <div className="w-16 xl:p-2 lg:w-20">
              <img src="assets/images/logo.png" />
            </div>

            <div className="text-xs ">
              <p className="font-serif text-gray-50 uppercase lg:text-lg lg:font-bold pt-4">
                vivekanandar sevalaya
              </p>
              <p className="text-gray-100 uppercase md:text-xs  sm:text-xs">
                Swami Vivekanandar Trust
              </p>
            </div>
          </div>

          <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul className="lg:flex items-center justify-between text-base text-gray-50 pt-4 lg:pt-0">
                <li>
                  <Link
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-200"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-200"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                <Link
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent  hover:border-orange-200"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                <Link
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent  hover:border-orange-200"
                    to="/members"
                  >
                    Trust-Members
                  </Link>
                </li>
                <li>
                  <Link
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent  hover:border-orange-200"
                    to="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Outlet />
        <div className="bg-orange-900  py-10">
          <div className="p-5">
            <p className="text-white text-lg text-center">
              No 64, Kadalamangalam (Village), Malliankaranai (Post) Utiramerur
              - 603 406, Kanchipuram District | Phone: 97154 40460
            </p>
          </div>
          <div className="p-3">
            <p className="text-white text-sm text-center">
              Copyright © {new Date().getFullYear()} Swami Vivekanandar Sevalaya
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
