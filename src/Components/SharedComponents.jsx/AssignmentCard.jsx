import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const AssignmentCard = ({ assignment }) => {
  const { _id, thumbnailUrl, title, marks, difficulty, uploadedThumb } = assignment;
  return (
    <div className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
        <img
          className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
          src={uploadedThumb ? uploadedThumb : thumbnailUrl || 'https://i.ibb.co/LkhdYxJ/Placeholder.jpg'}
          alt={title}
        />
      </div>
      <div className="flex flex-col h-full divide-x justify-between divide-gray-100 dark:divide-slate-700 items-center">
        <h3 className="grow h-full text-lg font-bold text-gray-800 dark:text-white text-center border-b border-gray-100 dark:border-slate-700 w-full py-3 px-5">{title}</h3>
        <div className="w-full flex justify-center items-center divide-x">
          <p className=" text-rich/80 dark:text-gray-400 w-1/2 py-2 text-center">
            Marks: <span className="inline-block py-1 px-2 font-semibold">{marks}</span>
          </p>
          <p className=" text-rich/80 dark:text-gray-400 w-1/2 text-center py-2">
            Difficulty:{' '}
            <span
              className={`inline-block py-1 px-2 text-rich rounded-lg ${
                difficulty === 'Hard' ? 'bg-red-200' : difficulty === 'Medium' ? 'bg-yellow-200' : difficulty === 'Easy' ? 'bg-green-200' : ''
              }`}
            >
              {difficulty}
            </span>
          </p>
        </div>
        <div className="w-full grid grid-cols-2">
          <Link
            to={`/assignment/${_id}`}
            className="text-center w-full py-4 font-bold bg-amb bg-mandarin text-white inline-block"
          >
            View Assignment
          </Link>
          <Link
            to={`/update/${_id}`}
            className="text-center w-full py-4 font-bold bg-[#3C64B9] text-white inline-block"
          >
            Update Assignment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;

AssignmentCard.propTypes = {
  assignment: PropTypes.object,
};
