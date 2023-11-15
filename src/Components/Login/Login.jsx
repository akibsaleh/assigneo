import loginBG from '../../assets/loginBG.svg';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import MediaButton from '../SharedComponents.jsx/MediaButton';
const Login = () => {
  return (
    <div className="container max-w-screen-xl w-full mx-auto lg:gap-10 h-full bg-white dark:bg-oxford flex flex-col sm:flex-row justify-center items-center grow px-5 lg:px-0">
      <div className="w-full sm:w-3/5 lg:w-1/2 flex justify-center sm:justify-end items-center py-10 px-5 sm:px-0">
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
            <MediaButton />
            <div className="py-3 flex items-center text-xs text-gray-200 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              Or
            </div>
            {/* Form */}
            <LoginForm />
            {/* End Form */}
          </div>
        </div>
      </div>
      <div className="w-full sm:w-2/5 lg:w-1/2 hidden sm:flex justify-center sm:justify-start items-center">
        <img
          src={loginBG}
          className="w-full h-auto max-w-2xl"
        />
      </div>
    </div>
  );
};

export default Login;
