/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLink } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { AuthContext } from '../Providers/AuthProvider';
import PropTypes from 'prop-types';

const TakeAssignmentForm = ({ id, title, marks }) => {
  const { user } = useContext(AuthContext);

  const dateObj = new Date();
  const currentDate = dateObj.toDateString().substring(4);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleOnSubmit = (data) => {
    if (user) {
      const newData = {
        ...data,
        displayName: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        status: 'pending',
        assignment_id: id,
        date: currentDate,
        assignment_title: title,
        marks: marks,
      };
      axios.post('/submissions', newData).then((result) => {
        if (result?.data?.insertedId) {
          toast.success('Your assignment submitted successfully');
          reset();
        }
      });
    } else {
      toast.error('Please login to submit assignment');
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="flex flex-col gap-y-5 items-center"
    >
      <div className="w-full px-5">
        <label
          htmlFor="hs-trailing-icon"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Assignment Pdf Link
        </label>
        <div className="relative">
          <input
            type="text"
            id="hs-trailing-icon"
            name="hs-trailing-icon"
            className="py-3 px-4 pe-11 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Enter the link of your assignment. Ex. Google Drive Link"
            {...register('pdf', {
              required: 'Pdf link is required',
            })}
          />
          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
            <AiOutlineLink className="text-2xl" />
          </div>
        </div>
        {errors.pdf && <p className="text-red-400 text-sm mt-1">{errors?.pdf?.message}</p>}
      </div>
      <div className="w-full px-5">
        <label
          htmlFor="note"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Quick Note
        </label>
        <textarea
          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          rows={3}
          id="note"
          placeholder="This is a textarea placeholder"
          {...register('note')}
        />
      </div>
      <button
        type="Submit"
        className="w-fit py-3.5 px-8 inline-flex gap-x-2 font-bold capitalize justify-center items-center rounded-full border border-mandarin/50 bg-mandarin text-rich shadow-sm hover:bg-mandarin/75 duration-200 transition-colors"
      >
        Submit Assignment
      </button>
    </form>
  );
};

export default TakeAssignmentForm;

TakeAssignmentForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  marks: PropTypes.string.isRequired,
};
