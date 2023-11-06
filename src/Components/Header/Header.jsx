import { NavLink } from 'react-router-dom';
import logo from '../../assets/AssigneoLogo.svg';
import whiteLogo from '../../assets/AssigneoLogoWhite.svg';
import ThemeToggle from './ThemeToggle';
import { HiOutlineMenu } from 'react-icons/hi';
import AccessButtons from './AccessButtons';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Logout from '../Logout/Logout';

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-oxford dark:border-gray-700">
        <nav
          className="relative max-w-7xl flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="/"
              aria-label="Brand"
            >
              <img
                src={logo}
                alt="Assigneo"
                className="h-14 w-auto inline-block dark:hidden"
              />
              <img
                src={whiteLogo}
                alt="Assigneo"
                className="h-14 w-auto hidden dark:inline-block"
              />
            </a>
          </div>

          <div className="flex items-center gap-x-4 sm:gap-x-7 ml-auto sm:ml-0 sm:order-3 sm:pl-6">
            <ThemeToggle />
            {user ? <Logout /> : <AccessButtons />}

            <div className="sm:hidden">
              <button
                type="button"
                className="p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-rich shadow align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#navbar-offcanvas-example"
                aria-controls="navbar-offcanvas-example"
                aria-label="Toggle navigation"
              >
                <HiOutlineMenu className="text-3xl" />
              </button>
            </div>
          </div>

          <div
            id="navbar-offcanvas-example"
            className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-r basis-full grow sm:order-2 sm:static sm:block sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto dark:bg-oxford dark:border-r-gray-700 sm:dark:border-r-transparent hidden"
            tabIndex="-1"
            data-hs-overlay-close-on-resize
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  (isActive ? 'text-mandarin' : 'text-rich dark:text-platinum') +
                  ` capitalize font-semibold transition-colors duration-200 hover:text-mandarin sm:border-gray-300 sm:my-6   dark:hover:text-mandarin`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/all-assignments"
                className={({ isActive }) =>
                  (isActive ? 'text-mandarin' : 'text-rich dark:text-platinum') +
                  ` capitalize font-semibold transition-colors duration-200 hover:text-mandarin sm:border-gray-300 sm:my-6   dark:hover:text-mandarin`
                }
              >
                All Assignments
              </NavLink>
              <NavLink
                to="/my-assignments"
                className={({ isActive }) =>
                  (isActive ? 'text-mandarin' : 'text-rich dark:text-platinum') +
                  ` capitalize font-semibold transition-colors duration-200 hover:text-mandarin sm:border-gray-300 sm:my-6   dark:hover:text-mandarin`
                }
              >
                My Assignments
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
