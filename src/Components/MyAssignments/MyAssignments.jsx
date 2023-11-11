import { useContext, useEffect, useState } from 'react';
import Title from '../SharedComponents.jsx/Title';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DoorDashFavorite from '../CustomLoader/DoorDashFavorite';
import AssignmentCard from '../SharedComponents.jsx/AssignmentCard';

const MyAssignments = () => {
  const [email, setEmail] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  const { data } = useQuery({
    queryKey: ['myAssignment', email],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:5000/my-assignment?email=${email}`, { withCredentials: true });
      return data;
    },
    retry: 10,
    retryDelay: 3000,
  });

  console.log(data);

  if (data?.length > 0) {
    return (
      <div className="bg-white dark:bg-oxford container mx-auto max-w-screen-xl grow">
        <div className="bg-white dark:bg-oxford">
          <Title
            title={'All Assignments'}
            subTitle={'Here are the collection of all the assignments'}
          />
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
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-oxford container mx-auto max-w-screen-xl grow">
      <Title
        title={'My Assignments'}
        subTitle={'Here are all the assignments submitted by you'}
      />
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
};

export default MyAssignments;
