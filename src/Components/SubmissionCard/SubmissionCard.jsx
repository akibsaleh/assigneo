import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LiaExternalLinkSquareAltSolid } from 'react-icons/lia';

const SubmissionCard = ({ submission }) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">Assignment: {submission?.assignment_title}</p>
      </div>
      <div className="p-4 md:p-5 flex justify-start items-start gap-8">
        <div>
          <img
            src={submission?.photoURL}
            alt={submission?.displayName}
            className="w-14 h-14 object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">Examinee: {submission?.displayName}</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Marks: {submission?.marks}</p>
        </div>
      </div>
      <Link
        to={`/submission/${submission?._id}`}
        className="inline-flex justify-between items-center gap-x-2 py-2 px-3 rounded-b-lg border border-transparent text-oxford/60 font-bold text-sm hover:text-oxford dark:text-white dark:hover:text-rich dark:focus:outline-none bg-mandarin"
      >
        <span>Give Mark</span>
        <LiaExternalLinkSquareAltSolid className="text-lg" />
      </Link>
    </div>
  );
};

export default SubmissionCard;

SubmissionCard.propTypes = {
  submission: PropTypes.object,
};
