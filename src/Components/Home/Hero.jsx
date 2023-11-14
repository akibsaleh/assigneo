import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="max-w-[85rem] mx-auto px-4 pt-10 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3 mt-5 sm:mt-0 order-last sm:order-first flex flex-col gap-y-4 justify-center items-center sm:block">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl dark:text-white !leading-tight text-center sm:text-left max-w-xs sm:max-w-full">Study Better Together Here</h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400 text-center sm:text-left">
              Introducing Assigneo, a next-gen portal for group study and working on assignments together with your friends.
            </p>
            <div className="mt-5 lg:mt-8 flex items-center gap-2 sm:gap-3">
              <Link
                className="w-fit bg-mandarin hover:bg-mandarin/75 duration-200 transition-colors px-6 py-2.5 font-bold rounded-full text-sm sm:text-base dark:text-rich"
                to="/all-assignments"
              >
                See All Assignments
              </Link>
              <Link
                className="w-fit bg-mandarin hover:bg-mandarin/75 duration-200 transition-colors px-6 py-2.5 font-bold rounded-full text-sm sm:text-base dark:text-rich"
                to="/create-assignment"
              >
                Create Assignment
              </Link>
            </div>
          </div>
          {/* End Col */}
          <div className="lg:col-span-4 lg:mt-0 order-first sm:order-last">
            <img
              className="w-full rounded-xl"
              src="https://i.ibb.co/VTWmWwj/hero-banner.webp"
              alt="Image Description"
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
};

export default Hero;
