import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import LogoutButton from './LogoutButton';

const Logout = () => {
  const { user, profileInfo } = useContext(AuthContext);
  return (
    <div className="hidden md:flex gap-x-7 justify-center items-center">
      <div className="hs-tooltip hidden lg:inline-block [--placement:bottom]">
        <img
          src={user?.photoURL || profileInfo?.photo}
          className="hs-tooltip-toggle w-12 h-12 rounded-full shadow border-2 border-mandarin"
        />
        <span
          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1.5 px-3 rounded-md bg-rich dark:bg-platinum text-white"
          role="tooltip"
        >
          {user?.displayName || profileInfo?.name}
        </span>
      </div>
      <LogoutButton />
    </div>
  );
};

export default Logout;
