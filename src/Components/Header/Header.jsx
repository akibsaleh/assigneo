import logo from '../../assets/AssigneoLogo.svg';
import whiteLogo from '../../assets/AssigneoLogoWhite.svg';
import ThemeToggle from './ThemeToggle';
import { HiOutlineMenu } from 'react-icons/hi';
import { SlClose } from 'react-icons/sl';
import AccessButtons from './AccessButtons';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Logout from '../Logout/Logout';
import Menu from './Menu';
import LogoutButton from '../Logout/LogoutButton';

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-oxford dark:border-gray-700">
        <nav
          className="relative max-w-7xl flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 py-4 md:py-0"
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

          <div className="flex items-center gap-x-4 md:gap-x-7 ml-auto md:ml-0 md:order-3 md:pl-6">
            <ThemeToggle />
            {user ? (
              <Logout />
            ) : (
              <div className="hidden md:flex">
                <AccessButtons />
              </div>
            )}

            <div className="md:hidden">
              <button
                type="button"
                className="p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-rich shadow align-middle hover:bg-gray-100 dark:bg-rich dark:text-white dark:border-slate-600"
                data-hs-overlay="#drawer-navbar"
                aria-controls="drawer-navbar"
                aria-label="Toggle navigation"
              >
                <HiOutlineMenu className="hs-overlay-open:hidden text-3xl" />
              </button>
            </div>
          </div>

          <div className="grow sm:order-2 md:static md:block md:h-auto md:max-w-none md:w-auto md:border-r-transparent md:transition-none md:translate-x-0 md:z-40 md:basis-auto md:dark:border-r-transparent hidden">
            <Menu />
          </div>
        </nav>
      </header>
      <div
        id="drawer-navbar"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e dark:bg-rich dark:border-rich"
        tabIndex={-1}
      >
        <div className="flex justify-between items-center py-3 px-4 border-b border-rich/20 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Menu</h3>
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center text-xl rounded-lg text-rich hover:text-rich/75 dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            data-hs-overlay="#drawer-navbar"
          >
            <span className="sr-only">Close offcanvas</span>
            <SlClose />
          </button>
        </div>

        <div className="flex-shrink-0 group block px-4 pb-0 pt-8 w-full">
          <div className="flex items-center">
            <img
              className="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full"
              src={user?.photoURL}
              alt="Image Description"
            />
            <div className="ms-3">
              <h4 className="font-semibold text-gray-800 dark:text-white">{user?.displayName}</h4>
              <p className="text-sm font-medium text-gray-400">{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="px-4 pb-4 pt-0 w-full">
          <Menu />
        </div>
        <div className="p-4 w-full flex justify-center">{!user?.email ? <AccessButtons /> : <LogoutButton />}</div>
      </div>
    </>
  );
};

export default Header;
