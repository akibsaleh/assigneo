import { useState } from 'react';
import Title from '../SharedComponents.jsx/Title';
import axios from 'axios';
import DoorDashFavorite from '../CustomLoader/DoorDashFavorite';
import AssignmentCard from '../SharedComponents.jsx/AssignmentCard';
import { useQuery } from '@tanstack/react-query';

const AllAssignments = () => {
  const [filter, setFilter] = useState('all');

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const getAssignmentList = async (filter) => {
    const { data } = await axios.get(`http://localhost:5000/all-assignment?difficulty=${filter}`);
    return data;
  };

  const { data } = useQuery({ queryKey: ['assignments', filter], queryFn: () => getAssignmentList(filter) });

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
    <div className="container max-w-screen-xl mx-auto flex flex-col grow mb-20">
      <div className="bg-white dark:bg-oxford">
        <Title
          title={'All Assignments'}
          subTitle={'Here are the collection of all the assignments'}
        />
      </div>
      <div className="w-full pb-10 flex justify-center">
        <div className="flex justify-center items-center">
          <label
            htmlFor="hs-select-label"
            className="block text-sm font-medium dark:text-white w-64"
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
      <div className="grid grid-cols-3 gap-10">
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
    </div>
  );
};

export default AllAssignments;
