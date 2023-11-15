import { useContext, useEffect, useState } from 'react';
import Title from '../SharedComponents.jsx/Title';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DoorDashFavorite from '../CustomLoader/DoorDashFavorite';
import MyAssignmentCard from './MyAssignmentCard';

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
      const response = await axios.get(`/my-assignment?email=${email}`, { withCredentials: true });
      return response?.data;
    },
    retry: 5,
    retryDelay: 2000,
  });

  if (data?.length > 0) {
    return (
      <div className="bg-white dark:bg-oxford container mx-auto max-w-screen-xl grow px-5 sm:px-0 pb-10">
        <div className="bg-white dark:bg-oxford">
          <Title
            title={'My Assignments'}
            subTitle={'Here is the collection of all of my assignments'}
          />
          <div className={`grid grid-cols-1 md::grid-cols-${data?.length > 1 ? '2' : '1'} gap-10 justify-items-center`}>
            {data?.length !== 0 ? (
              data?.map((assignment) => (
                <MyAssignmentCard
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
  } else if (data?.length === 0) {
    return (
      <div className="bg-white dark:bg-oxford container mx-auto max-w-screen-xl grow px-5 sm:px-0">
        <Title
          title={'My Assignments'}
          subTitle={'Here are all the assignments submitted by you'}
        />
        <div className="grid grid-cols-1 items-center text-center">
          <h3>You have not submitted any assignment yet.</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-oxford container mx-auto max-w-screen-xl grow px-5 sm:px-0">
      <div className="bg-white dark:bg-oxford">
        <Title
          title={'All Assignments'}
          subTitle={'Here are the collection of all the assignments'}
        />
        <div className="grid grid-cols-3 gap-10">
          <DoorDashFavorite />
        </div>
      </div>
    </div>
  );
};

export default MyAssignments;
