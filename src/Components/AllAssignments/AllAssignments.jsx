import { useState } from 'react';
import Title from '../SharedComponents.jsx/Title';
import axios from 'axios';
import DoorDashFavorite from '../CustomLoader/DoorDashFavorite';
import AssignmentCard from '../SharedComponents.jsx/AssignmentCard';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { useQuery } from '@tanstack/react-query';

const AllAssignments = () => {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const getAssignmentList = async (filter, page) => {
    const { data } = await axios.get(`/all-assignment?difficulty=${filter}&page=${page}`);
    setLastPage(Math.ceil(parseInt(data?.total) / 9));
    return data.data;
  };

  const { data } = useQuery({ queryKey: ['assignments', filter, page], queryFn: () => getAssignmentList(filter, page) });

  if (!data) {
    return (
      <div className="container mx-auto">
        <div className="bg-white dark:bg-oxford">
          <Title
            title={'All Assignments'}
            subTitle={'Here are the collection of all the assignments'}
          />
        </div>
        <div className="grid grid-cols-3 items-center">
          {Array(6)
            .fill(1)
            .map((item, index) => (
              <div
                key={index}
                className="w-full h-full flex flex-col justify-center items-center"
              >
                <DoorDashFavorite />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-screen-xl mx-auto flex flex-col grow mb-20 px-5 lg:px-0">
      <div className="bg-white dark:bg-oxford">
        <Title
          title={'All Assignments'}
          subTitle={'Here are the collection of all the assignments'}
        />
      </div>
      <div className="w-full pb-10 flex flex-col sm:flex-row justify-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-y-3">
          <label
            htmlFor="hs-select-label"
            className="block text-sm font-medium dark:text-white w-full sm:w-64 text-center sm:text-left"
          >
            Choose Difficulty Level
          </label>
          <select
            id="hs-select-label"
            className="py-3 px-4 pe-9 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            onChange={handleFilter}
            defaultValue="all"
          >
            <option value="all">Open this select menu</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.length !== 0 ? (
          data?.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
            />
          ))
        ) : (
          <h1 className="col-span-4 text-center">No Assignments found</h1>
        )}
      </div>
      <div className="flex justify-center items-center w-full px-5 py-12">
        <nav className="flex items-center gap-x-1">
          <button
            onClick={() => {
              page > 1 ? setPage(page - 1) : null;
            }}
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:focus:bg-white/10  dark:bg-rich text-rich/75 dark:text-white"
          >
            <HiOutlineChevronLeft />
            <span
              aria-hidden="true"
              className="sr-only"
            >
              Previous
            </span>
          </button>
          <div className="flex items-center gap-x-1">
            {[...Array(lastPage).keys()].map((item, idx) => (
              <button
                onClick={() => {
                  setPage(item + 1);
                }}
                key={idx}
                type="button"
                className={`min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 py-2 px-3 text-sm rounded-lg focus:outline-none ${
                  page === item + 1 ? 'bg-platinum dark:bg-rich text-rich/75 dark:text-white' : 'bg-white dark:bg-slate-800 text-rich/50 dark:text-white'
                } dark:border-gray-700`}
                aria-current="page"
              >
                {item + 1}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              page < lastPage ? setPage(page + 1) : null;
            }}
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <span
              aria-hidden="true"
              className="sr-only"
            >
              Next
            </span>
            <HiOutlineChevronRight />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default AllAssignments;
