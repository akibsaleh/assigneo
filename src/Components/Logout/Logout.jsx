import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Logout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex gap-x-7 justify-center items-center">
      <div className="hs-tooltip inline-block">
        <img
          src={user?.photoURL}
          className="hs-tooltip-toggle w-12 h-12 rounded-full shadow border-2 border-mandarin"
        />
        <span
          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white"
          role="tooltip"
        >
          Tooltip on top
        </span>
      </div>
      <button className="bg-mandarin hover:bg-amber-400 flex items-center gap-x-2 capitalize font-semibold  px-5 py-2 rounded-full text-rich transition-colors duration-200 hover:text-slate-700 sm:border-gray-300 sm:my-6">
        Sign Out
      </button>
    </div>
  );
};

export default Logout;
