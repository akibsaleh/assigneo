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
            title={'All Assignments'}
            subTitle={'Here are the collection of all the assignments'}
          />
        </div>
        <div>
          <TableLoader />
        </div>
      </div>
    );
  return (
    <div className="container max-w-screen-xl mx-auto flex flex-col grow">
      <div className="bg-white dark:bg-oxford">
        <Title
          title={'All Assignments'}
          subTitle={'Here are the collection of all the assignments'}
        />
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg overflow-hidden dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700 text-center">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Examinee
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Assignment
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Marks
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      <span className="mr-7">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {data?.map((submission, idx) => (
                    <SubmissionCard
                      key={idx}
                      submission={submission}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmittedAssignments;
