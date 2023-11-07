const AssignmentForm = () => {
  return (
    <form className="w-full max-w-5xl rounded-md shadow-lg bg-platinum/20 p-10 mt-5 mb-20 mx-auto min-h-[500px] grid grid-cols-10 items-center gap-5">
      <div className="col-span-4 w-full h-full rounded-md bg-gray-400"></div>
      <div className="col-span-6 w-full flex flex-col gap-y-5">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium dark:text-white"
          >
            Assignment Title <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="text"
            id="title"
            className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus:ring-1 focus:border-1 focus:border-mandarin focus:ring-mandarin dark:border-rich"
            placeholder="Enter the title of the assignment"
          />
        </div>
        {/* Marks */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium dark:text-white"
          >
            Assignment Marks <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="number"
            id="title"
            className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus:ring-1 focus:border-1 focus:border-mandarin focus:ring-mandarin dark:border-rich"
            placeholder="Enter the title of the assignment"
          />
        </div>
        {/* difficulty level */}
        <div className="flex flex-col gap-2">
          <>
            <label
              htmlFor="hs-select-label"
              className="block text-sm font-medium mb-2 dark:text-white"
            >
              Label
            </label>
            <select
              id="hs-select-label"
              className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:border-mandarin focus:ring-1 focus:border-1 focus:border-mandarin focus:ring-mandarin dark:border-rich"
            >
              <option
                disabled
                selected=""
              >
                Open this select menu
              </option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </>
        </div>
        {/* Due Date */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium dark:text-white"
          >
            Assignment Title <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="text"
            id="title"
            className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus:ring-1 focus:border-1 focus:border-mandarin focus:ring-mandarin dark:border-rich"
            placeholder="Enter the title of the assignment"
          />
        </div>
        {/* Description */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium dark:text-white"
          >
            Assignment Title <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="text"
            id="title"
            className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus:ring-1 focus:border-1 focus:border-mandarin focus:ring-mandarin dark:border-rich"
            placeholder="Enter the title of the assignment"
          />
        </div>
      </div>
    </form>
  );
};

export default AssignmentForm;
