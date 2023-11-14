import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Menu = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-y-0 gap-x-0 mt-5 divide-y divide-rich/20 dark:divide-platinum/20 md:divide-y-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
      <NavLink
        to="/"
        className={({ isActive }) =>
          (isActive ? 'text-mandarin' : 'text-rich dark:text-platinum') +
          ` capitalize font-semibold transition-colors duration-200 hover:text-mandarin sm:border-gray-300 md:my-6   dark:hover:text-mandarin py-3 md:py-0`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all-assignments"
        className={({ isActive }) =>
          (isActive ? 'text-mandarin' : 'text-rich dark:text-platinum') +
          ` capitalize font-semibold transition-colors duration-200 hover:text-mandarin md:border-gray-300 md:my-6   dark:hover:text-mandarin py-3 md:py-0`
        }
      >
        Assignments
      </NavLink>

      {user?.email && (
        <NavLink
          to="/create-assignment"
          className={({ isActive }) =>
            (isActive ? 'text-mandarin' : 'text-rich dark:text-platinum') +
            ` capitalize font-semibold transition-colors duration-200 hover:text-mandarin md:border-gray-300 md:my-6   dark:hover:text-mandarin py-3 md:py-0`
          }
        >
          Create Assignment
        </NavLink>
      )}
      {user?.email && (
        <NavLink
          to="/submitted-assignments"
          className={({ isActive }) =>
            (isActive ? 'text-mandarin' : 'text-rich dark:text-platinum') +
            ` capitalize font-semibold transition-colors duration-200 hover:text-mandarin md:border-gray-300 md:my-6   dark:hover:text-mandarin py-3 md:py-0`
          }
        >
          Submitted Assignments
        </NavLink>
      )}
      {user?.email && (
        <NavLink
          to="/my-assignments"
          className={({ isActive }) =>
            (isActive ? 'text-mandarin' : 'text-rich dark:text-platinum') +
            ` capitalize font-semibold transition-colors duration-200 hover:text-mandarin md:border-gray-300 md:my-6   dark:hover:text-mandarin py-3 md:py-0`
          }
        >
          My Assignments
        </NavLink>
      )}
    </div>
  );
};

export default Menu;
