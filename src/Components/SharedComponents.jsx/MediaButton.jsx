/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';

const MediaButton = () => {
  const { handleGoogleLogin } = useContext(AuthContext);
  const onGoogleSignin = () => {
    handleGoogleLogin()
      .then((user) => {
        toast.success('Logged in successfully with google');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        onClick={onGoogleSignin}
        type="button"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-rich shadow-sm align-middle hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-amber-400 transition-all text-sm dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-700 dark:text-gray-200 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        <FcGoogle />
        Sign in with Google
      </button>
    </>
  );
};

export default MediaButton;
