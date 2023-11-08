/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleLoader from '../CustomLoader/SingleLoader';
import { LuFileSignature } from 'react-icons/lu';
import { MdDateRange } from 'react-icons/md';
import { MdCrisisAlert } from 'react-icons/md';
import { TbEditCircle } from 'react-icons/tb';
import { BiSolidTrash } from 'react-icons/bi';
import { RiCloseCircleLine } from 'react-icons/ri';
import TakeAssignmentForm from './TakeAssignmentForm';

const SingleAssignment = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`/assignment/${id}`).then((result) => setData(result?.data));
  }, [id]);

  if (data === null) {
    return (
      <div className="container mx-auto flex justify-center items-start grow">
        <SingleLoader />
      </div>
    );
  }

  return (
    <>
      <div className="container max-w-screen-xl mx-auto py-10 grid grid-cols-2 grow">
        <div className="flex flex-col gap-y-3">
          <p
            className={`inline-flex items-center gap-1  w-fit py-1 px-2 text-rich/70 font-bold rounded-lg ${
              data?.difficulty === 'Hard' ? 'bg-red-200' : data?.difficulty === 'Medium' ? 'bg-yellow-200' : data?.difficulty === 'Easy' ? 'bg-green-200' : ''
            }`}
          >
            <MdCrisisAlert className="text-xl" />
            Difficulty : {data?.difficulty}
          </p>
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <div className="inline-flex gap-10 pb-10">
            <p className="inline-flex items-center gap-1 font-bold text-sm text-rich/60">
              <LuFileSignature className="text-lg" /> Mark: {data?.marks}
            </p>
            <p className="inline-flex items-center gap-1 font-bold text-sm text-rich/60">
              <MdDateRange className="text-lg" /> Due Date: {data?.date.split(' ').splice(1, 3).join(' ')}
            </p>
          </div>
          <p className="text-lg leading-loose md:pr-10 pb-5">{data?.description}</p>
          <div className="inline-flex items-center gap-5">
            <button
              type="button"
              data-hs-overlay="#hs-focus-management-modal"
              className="w-fit py-3.5 px-8 inline-flex gap-x-2 font-bold capitalize justify-center items-center rounded-full border border-mandarin/50 bg-mandarin text-rich shadow-sm hover:bg-mandarin/75 duration-200 transition-colors"
            >
              <TbEditCircle className="text-xl" /> Take Assignment
            </button>
            <button
              type="button"
              className="w-fit py-3.5 px-8 inline-flex gap-x-2 font-bold capitalize justify-center items-center rounded-full border border-mandarin/50 bg-red-500 text-white shadow-sm hover:bg-red-700 duration-200 transition-colors"
            >
              <BiSolidTrash className="text-xl" /> Delete
            </button>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img
            src={data?.uploadedThumb ? data?.uploadedThumb : data?.thumbnailUrl}
            alt={data?.title}
            className="w-full h-full object-cover rounded-lg shadow-2xl max-h-[500px]"
          />
        </div>
      </div>
      <>
        <div
          id="hs-focus-management-modal"
          className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-2xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
            <div className="flex flex-col w-full bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="flex justify-between items-center py-3 px-5 border-b dark:border-gray-700">
                <h3 className="text-2xl w-full font-bold text-gray-800 dark:text-white px-4">Assignment Submission</h3>
                <button
                  type="button"
                  className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#hs-focus-management-modal"
                >
                  <span className="sr-only">Close</span>
                  <RiCloseCircleLine className="text-2xl" />
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <TakeAssignmentForm />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SingleAssignment;
