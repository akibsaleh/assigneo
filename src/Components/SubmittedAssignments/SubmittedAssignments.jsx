import { useEffect, useState } from 'react';
import Title from '../SharedComponents.jsx/Title';
import axios from 'axios';
import TableLoader from '../CustomLoader/TableLoader';
import SubmissionCard from '../SubmissionCard/SubmissionCard';

const SubmittedAssignments = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/submissions/').then((res) => setData(res.data));
  }, []);

  if (!data)
    return (
      <div className="container max-w-screen-xl mx-auto flex flex-col grow">
        <div className="bg-white dark:bg-oxford">
          <Title
            title={'Submitted Assignments'}
            subTitle={'Here is the collection of all the submitted assignments'}
          />
        </div>
        <div>
          <TableLoader />
        </div>
      </div>
    );
  return (
    <div className="container max-w-screen-xl mx-auto flex flex-col grow px-5 sm:px-0 pb-10">
      <div className="bg-white dark:bg-oxford">
        <Title
          title={'Submitted Assignments'}
          subTitle={'Here is the collection of all the submitted assignments'}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data?.map((submission, idx) => (
          <SubmissionCard
            key={idx}
            submission={submission}
          />
        ))}
      </div>
    </div>
  );
};

export default SubmittedAssignments;
