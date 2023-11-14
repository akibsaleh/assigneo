import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';

const LogoutButton = () => {
  const { handleLogout } = useContext(AuthContext);
  const onLogOut = () => {
    handleLogout()
      .then(() => {
        toast.success('Signed Out Successfully');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <button
      onClick={onLogOut}
      className="bg-mandarin hover:bg-amber-400 flex items-center gap-x-2 capitalize font-semibold  px-5 py-2 rounded-full text-rich transition-colors duration-200 hover:text-slate-700 sm:border-gray-300 sm:my-6"
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
