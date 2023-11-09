import { HiArrowSmallLeft } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center px-2 md:px-0">
      <div className="lg:flex lg:items-center lg:space-x-10">
        <img
          src="https://illustrations.popsy.co/gray/crashed-error.svg"
          alt="question-mark"
          className="h-[300px] w-auto"
        />
        <div>
          <p className="mt-6 text-3xl font-semibold text-black">404 Error !!!</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">We can&#x27;t find that page</h1>
          <p className="mt-4 text-gray-500">Sorry, the page you are looking for doesn&#x27;t exist or has been moved.</p>
          <div className="mt-6 flex items-center space-x-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => {
                navigate(-1);
              }}
            >
              <HiArrowSmallLeft />
              <span className="pl-2">Go back</span>
            </button>
            <Link to="/">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
