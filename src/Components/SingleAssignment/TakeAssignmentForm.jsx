import { AiOutlineLink } from 'react-icons/ai';
const TakeAssignmentForm = () => {
  return (
    <form className="flex flex-col gap-y-5 items-center">
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
          />
          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
            <AiOutlineLink classNametext-2xl />
          </div>
        </div>
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
