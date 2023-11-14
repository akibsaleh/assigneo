import axios from 'axios';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const MarkingForm = ({ id, submission }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    // const { assignment_id, assignment_title, date, displayName, email, marks, note, pdf, photoURL } = submission;
    const status = 'completed';
    const newData = { status, ...data };
    axios.patch(`/submission/${id}`, newData).then((res) => {
      console.log(res);
      if (res.modifiedCount > 0) {
        toast.success('Submission marked successfully');
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="mt-5 mr-3 p-5 rounded-xl border border-platinum dark:border-slate-700 flex flex-col gap-y-5"
    >
      <h3 className="text-xl">Review Submission</h3>
      <div className="flex flex-col gap-y-3">
        <label
          htmlFor="hs-input-with-add-on-url"
          className="block text-sm text-gray-700 font-medium dark:text-white"
        >
          Submission Mark
        </label>
        <div className="flex rounded-lg shadow-sm w-full">
          <input
            type="number"
            id="hs-input-with-add-on-url"
            className="py-3 px-4 ps-5 block w-full border border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Mark this assignment here"
            {...register('result_marks', {
              required: 'Mark is required',
            })}
          />
          {errors.result_marks && <p className="text-sm mt-1 text-red-500">{errors.result_marks?.message}</p>}
          <div className="px-4 inline-flex items-center min-w-fit rounded-e-md shadow-sm border border-s-0 border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <span className="text-sm text-gray-500 dark:text-gray-400">Out of {submission?.marks}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <label
          htmlFor="textarea-label"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Submission Feedback
        </label>
        <textarea
          id="textarea-label"
          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          rows={3}
          placeholder="Enter your feedback related to this submission"
          {...register('feedback', {
            required: 'Feedback is required',
          })}
        />
        {errors.feedback && <p className="text-sm mt-1 text-red-500">{errors.feedback?.message}</p>}
      </div>
      <button
        type="submit"
        className="text-rich bg-mandarin mb-2 py-2.5 w-fit px-6 rounded-full font-semibold hover:bg-mandarin/70"
      >
        Submit
      </button>
    </form>
  );
};

export default MarkingForm;

MarkingForm.propTypes = {
  submission: PropTypes.object,
  id: PropTypes.string,
};
