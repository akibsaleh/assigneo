import { PiUserCircleGear, PiUserCirclePlus } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

const AccessButtons = () => {
  return (
    <div className="flex divide-x divide-rich">
      <NavLink
        to="/login"
        className={({ isActive }) =>
          (isActive ? 'bg-amber-300 hover:bg-mandarin' : 'bg-mandarin hover:bg-amber-400') +
          ` flex items-center gap-x-2 capitalize font-semibold px-3.5 py-2 rounded-s-full text-rich transition-colors duration-200 hover:bg-amber-400 hover:text-slate-700 sm:border-gray-300 sm:my-6`
        }
      >
        <PiUserCircleGear className="text-2xl" />
        Sign in
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          (isActive ? 'bg-amber-300 hover:bg-mandarin' : 'bg-mandarin hover:bg-amber-400') +
          ` flex items-center gap-x-2 capitalize font-semibold px-3.5 py-2 rounded-e-full text-rich transition-colors duration-200 hover:bg-amber-400 hover:text-slate-700 sm:border-gray-300 sm:my-6`
        }
      >
        <PiUserCirclePlus className="text-2xl" />
        Sign up
      </NavLink>
    </div>
  );
};

export default AccessButtons;
