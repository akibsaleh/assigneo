import Title from '../SharedComponents.jsx/Title';
import Faq from './Faq';
import Hero from './Hero';
import { HiOutlineRocketLaunch, HiOutlineDocumentChartBar, HiOutlineClipboardDocumentCheck, HiOutlineQueueList } from 'react-icons/hi2';

const Home = () => {
  return (
    <div className="container mx-auto grow max-w-screen-xl flex flex-col items-center">
      <Hero />
      <>
        {/* Icon Blocks */}
        <div className="max-w-[85rem] px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <Title title={'Our Features'} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12 pt-5">
            {/* Icon Block */}
            <div className="flex justify-center items-center gap-x-5 sm:flex-col sm:items-start">
              <div className="flex justify-center items-center w-20 h-20 rounded-xl bg-gradient-to-tr from-mandarin/10 to-mandarin/50 p-2">
                <HiOutlineRocketLaunch className="text-8xl" />
              </div>
              <div className="sm:mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Launch Assignment</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Responsive, and mobile-first project on the web</p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex justify-center items-center gap-x-5 sm:flex-col sm:items-start">
              <div className="flex justify-center items-center w-20 h-20 rounded-xl bg-gradient-to-tr from-mandarin/10 to-mandarin/50 p-2">
                <HiOutlineDocumentChartBar className="text-8xl" />
              </div>
              <div className="sm:mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Submit Assignment</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Components are easily customized and extendable</p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex justify-center items-center gap-x-5 sm:flex-col sm:items-start">
              <div className="flex justify-center items-center w-20 h-20 rounded-xl bg-gradient-to-tr from-mandarin/10 to-mandarin/50 p-2">
                <HiOutlineQueueList className="text-8xl" />
              </div>
              <div className="sm:mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Manage Submission</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Every component and plugin is well documented</p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex justify-center items-center gap-x-5 sm:flex-col sm:items-start">
              <div className="flex justify-center items-center w-20 h-20 rounded-xl bg-gradient-to-tr from-mandarin/10 to-mandarin/50 p-2">
                <HiOutlineClipboardDocumentCheck className="text-8xl" />
              </div>
              <div className="sm:mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Give Feedback</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Contact us 24 hours a day, 7 days a week</p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
        </div>
        {/* End Icon Blocks */}
      </>
      <div className="w-full grid sm:grid-cols-2 items-center">
        <div>
          <img
            src="https://i.ibb.co/NyM3FdC/12781055-5071717-ai.webp"
            className="w-full h-auto"
          />
        </div>
        <div className="-mt-20 sm:mt-0">
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default Home;
