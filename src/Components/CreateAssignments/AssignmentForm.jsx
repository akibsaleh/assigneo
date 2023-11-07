import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FileUploader } from 'react-drag-drop-files';
import { useForm } from 'react-hook-form';
import { TiDocumentAdd } from 'react-icons/ti';
import { RiUploadCloud2Line } from 'react-icons/ri';

const fileTypes = ['JPG', 'PNG'];

const AssignmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [dueDate, setDueDate] = useState(new Date());
  const [thumb, setThumb] = useState(null);

  const handleThumb = (file) => {
    setThumb(file);
  };

  useEffect(() => {
    setValue('date', dueDate);
    setValue('thumb', thumb);
  }, [dueDate, setValue, thumb]);

  const handleOnSubmit = (data) => {
    console.dir(data);
    console.log(errors);
  };
  return (
    <form
      className="w-full max-w-4xl rounded-md shadow-lg bg-platinum/20 p-10 mt-5 mb-20 mx-auto min-h-[500px] grid grid-cols-12 items-center gap-10"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <div className="col-span-5 w-full h-full rounded-md">
        {/* Darg and Drop zone */}
        <FileUploader
          handleChange={handleThumb}
          types={fileTypes}
        >
          <div className="flex justify-center items-center min-h-[300px] w-full bg-platinum/30 rounded-2xl mb-5 border-platinum border-2 border-dashed cursor-pointer">
            {!thumb && (
              <div className="flex flex-col text-center items-center gap-1 ">
                <RiUploadCloud2Line className="text-3xl text-rich/70" />
                <p className="text-rich/50 text-sm font-bold">Click to upload or drag and drop</p>
                <p className="text-rich/30 text-xs font-bold">Only JPG & PNG file allowed</p>
              </div>
            )}
          </div>
        </FileUploader>
        {/* Photo url input */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="thumbnailUrl"
            className="block text-sm font-medium dark:text-white"
          >
            Thumbnail Image URL <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="text"
            id="thumbnailUrl"
            className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:outline-mandarin  focus:border-mandarin focus:ring-mandarin dark:border-rich"
            placeholder="Enter the url of the thumbnail image"
            {...register('thumbnailUrl')}
          />
        </div>
      </div>
      <div className="col-span-7 w-full flex flex-col gap-y-5">
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
            className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:outline-mandarin  focus:border-mandarin focus:ring-mandarin dark:border-rich"
            placeholder="Enter the title of the assignment"
            {...register('title')}
          />
        </div>
        {/* Marks */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="marks"
            className="block text-sm font-medium dark:text-white"
          >
            Assignment Marks <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="number"
            id="marks"
            className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:outline-mandarin  focus:border-mandarin focus:ring-mandarin dark:border-rich"
            placeholder="Enter the title of the assignment"
            {...register('marks')}
          />
        </div>
        {/* difficulty level */}
        <div className="flex flex-col gap-2">
          <>
            <label
              htmlFor="hs-select-label"
              className="block text-sm font-medium dark:text-white"
            >
              Difficulty Level
            </label>
            <select
              id="hs-select-label"
              className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:outline-mandarin  focus:border-mandarin focus:ring-mandarin dark:border-rich"
              {...register('difficulty')}
              defaultValue="Open this select menu"
            >
              <option disabled>Select difficulty from options</option>
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
            Due Date <span className="text-red-500 font-bold">*</span>
          </label>
          <DatePicker
            className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:outline-mandarin  focus:border-mandarin focus:ring-mandarin dark:border-rich"
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
          />
        </div>
        {/* Description */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium dark:text-white"
          >
            Description <span className="text-red-500 font-bold">*</span>
          </label>
          <textarea
            className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:outline-mandarin  focus:border-mandarin focus:ring-mandarin dark:border-rich"
            rows={3}
            placeholder="This is a textarea placeholder"
            defaultValue={''}
            {...register('description')}
          />
        </div>
      </div>
      <div className="col-span-12 w-full flex justify-center py-5">
        <button
          type="submit"
          className="w-full max-w-md py-3.5 px-4 inline-flex gap-x-2 text font-semibold uppercase justify-center items-center rounded-full border border-mandarin/50 bg-mandarin text-rich shadow-sm hover:bg-mandarin/75 duration-200 transition-colors"
        >
          <TiDocumentAdd className="text-xl" /> Publish a new Assignment
        </button>
      </div>
    </form>
  );
};

export default AssignmentForm;