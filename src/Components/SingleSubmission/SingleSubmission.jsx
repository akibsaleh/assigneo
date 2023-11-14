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
    <div className="container max-w-screen-xl mx-auto flex flex-col grow bg-white dark:bg-rich px-5 sm:px-0">
      <div className="w-full container text-center mx-auto py-10">
        <h1 className="text-rich font-bold capitalize dark:text-white text-3xl">Assignment Submission</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-10 gap-10 items-center justify-items-center pb-20">
        <div className="md:col-span-5">
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
            <p className="mb-10 space-x-3">
              <span className="inline-block">View Submitted pdf</span>
              <button
                className="w-fit py-2.5 px-6 inline-flex gap-x-2 font-bold capitalize justify-center items-center rounded-full border border-mandarin/50 bg-mandarin text-rich shadow-sm hover:bg-mandarin/75 duration-200 transition-colors"
                data-hs-overlay="#hs-basic-modal"
              >
                Click Here
              </button>
            </p>
          </div>
        </div>
        <div className="md:col-span-5 w-full">
          <MarkingForm
            id={id}
            submission={data}
          />
        </div>
      </div>
      <ViewPDF pdf={data?.pdf} />
    </div>
  );
};

export default SingleSubmission;
