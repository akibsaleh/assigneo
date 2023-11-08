import { useEffect, useState } from 'react';
import Title from '../SharedComponents.jsx/Title';
import axios from 'axios';
import DoorDashFavorite from '../CustomLoader/DoorDashFavorite';
import AssignmentCard from '../SharedComponents.jsx/AssignmentCard';

const AllAssignments = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/all-assignment').then((result) => setData(result.data));
  }, []);

  if (data === null) {
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
    <div className="container max-w-screen-xl mx-auto flex flex-col">
      <div className="bg-white dark:bg-oxford">
        <Title
          title={'All Assignments'}
          subTitle={'Here are the collection of all the assignments'}
        />
      </div>
      <div className="grid grid-cols-3 gap-10">
        {data?.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
          />
        ))}
      </div>
    </div>
  );
};

export default AllAssignments;
