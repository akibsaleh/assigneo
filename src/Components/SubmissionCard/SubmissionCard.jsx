import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubmissionCard = ({ submission }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        <div className="inline-flex items-center gap-2">
          <img
            src={submission?.photoURL}
            alt={submission?.displayName}
            className="w-10 h-10 object-cover rounded-full"
          />
          <p className="text-rich dark:text-platinum">{submission?.displayName}</p>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{submission?.assignment_title}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{submission?.marks}</td>
      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <Link
          to={`/submission/${submission?._id}`}
          className="inline-flex items-center gap-x-2 py-2 px-3 rounded-lg border border-transparent text-oxford/60 font-bold text-sm hover:text-oxford dark:text-mandarin dark:hover:text-mandarin/75 dark:focus:outline-none bg-mandarin/50"
        >
          Give Mark
        </Link>
      </td>
    </tr>
  );
};

export default SubmissionCard;

SubmissionCard.propTypes = {
  submission: PropTypes.object,
};
