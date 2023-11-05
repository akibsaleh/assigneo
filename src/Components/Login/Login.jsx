import { FcGoogle } from 'react-icons/fc';
import loginBG from '../../assets/loginBG.svg';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
const Login = () => {
  return (
    <div className="w-full mx-auto gap-10 h-full bg-white dark:bg-oxford flex flex-col sm:flex-row justify-center items-center grow">
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center py-10">
        <div className="w-full max-w-md p-4 sm:p-7 mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-rich dark:text-white">Sign in</h1>
            <p className="mt-2 text-sm text-rich/75 dark:text-gray-200">
              Don&#39;t have an account yet?{' '}
              <Link
                className="text-mandarin decoration-2 hover:underline font-medium"
                to="/register"
              >
                Sign up here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-rich shadow-sm align-middle hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-amber-400 transition-all text-sm dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-700 dark:text-gray-200 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              <FcGoogle />
              Sign in with Google
            </button>
            <div className="py-3 flex items-center text-xs text-gray-200 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              Or
            </div>
            {/* Form */}
            <LoginForm />
            {/* End Form */}
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 hidden sm:flex justify-center sm:justify-start items-center">
        <img
          src={loginBG}
          className="w-full h-auto max-w-2xl"
        />
      </div>
    </div>
  );
};

export default Login;