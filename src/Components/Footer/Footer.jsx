import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-white dark:bg-oxford border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-[85rem] py-6 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
          <div>
            <Link
              className="flex-none text-xl font-semibold text-black dark:text-white"
              to="/"
              aria-label="Brand"
            >
              Assigneo
            </Link>
          </div>
          {/* End Col */}
          <div className="text-center">
            <p className="text-sm text-gray-500">© {year} Assigneo. All rights reserved.</p>
          </div>
          {/* End Col */}
          {/* Social Brands */}
          <div className="md:text-right space-x-4">
            <a
              className="inline-flex justify-center items-center text-xl text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
              href="#"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="inline-flex justify-center items-center text-xl text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
              href="#"
            >
              <RiTwitterXFill />
            </a>
            <a
              className="inline-flex justify-center items-center text-xl text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
              href="#"
            >
              <AiFillGithub />
            </a>
          </div>
          {/* End Social Brands */}
        </div>
        {/* End Grid */}
      </div>
    </footer>
  );
};

export default Footer;
