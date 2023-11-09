import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarkingForm from './MarkingForm';
import ViewPDF from './ViewPDF';

const SingleSubmission = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/submission/${id}`).then((res) => setData(res.data));
  }, [id]);

  return (
    <div className="container max-w-screen-xl mx-auto flex flex-col grow bg-white dark:bg-rich">
      <div className="w-full container text-center mx-auto py-10">
        <h1 className="text-rich font-bold capitalize dark:text-white text-3xl">Assignment Submission</h1>
      </div>
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-2">
          <div className="pb-5">
            <p className="font-bold text-sm text-rich/50 dark:text-gray-200">Examinee</p>
            <p className="col-span-8">{data?.displayName}</p>
          </div>
          <div className="pb-5">
            <p className="font-bold text-sm text-rich/50 dark:text-gray-200">Assignment</p>
            <p className="col-span-8">{data?.assignment_title}</p>
          </div>
          {data?.note && (
            <div className="pb-5">
              <p className="font-bold text-sm text-rich/50 dark:text-white">Quick Note</p>
              <p className="cols-span-8">{data?.note}</p>
            </div>
          )}
          <div className="flex flex-col">
            <MarkingForm
              id={id}
              submission={data}
            />
          </div>
        </div>

        <ViewPDF pdf={data?.pdf} />
      </div>
    </div>
  );
};

export default SingleSubmission;
