import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const MyAssignmentCard = ({ assignment }) => {
  console.log(assignment);
  return (
    <div className="min-h-[15rem] w-full max-w-xl flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex flex-auto flex-col justify-center items-center pb-6">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white py-5 px-3">Assignment: {assignment.assignment_title}</h3>
        <div className="grid grid-cols-3 justify-center items-center w-full border-t border-b border-platinum divide-x divide-platinum">
          <p className="flex gap-2 justify-center items-center capitalize py-3">
            <span className="font-bold text-rich/75 dark:text-platinum">Status :</span>
            {assignment?.status}
          </p>
          <p className="flex gap-2 justify-center items-center capitalize py-3">
            <span className="font-bold text-rich/75 dark:text-platinum">Marks</span>
            {assignment?.marks}
          </p>
          <p className="flex gap-2 justify-center items-center capitalize py-3">
            <span className="font-bold text-rich/75 dark:text-platinum">Obtained</span>
            {assignment?.result_marks || 'N/A'}
          </p>
        </div>
        <p className="font-bold text-rich/75 dark:text-platinum pt-5">Feedback:</p>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-center pb-5">{assignment?.feedback || 'No feedback is available'}</p>
        <Link
          to={assignment?.pdf}
          target="_blank"
          className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-platinum bg-platinum/80 text-rich/75 shadow-sm hover:bg-mandarin hover:border-mandarin dark:border-slate-900 dark:bg-mandarin dark:text-rich dark:hover:bg-platinum dark:hover:text-rich/80"
        >
          Submitted PDF
        </Link>
      </div>
    </div>
  );
};

export default MyAssignmentCard;

MyAssignmentCard.propTypes = {
  assignment: PropTypes.object,
};
