import { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FileUploader } from 'react-drag-drop-files';
import { useForm } from 'react-hook-form';
import { TiDocumentAdd } from 'react-icons/ti';
import { LuImagePlus } from 'react-icons/lu';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import DoorDashFavorite from '../CustomLoader/DoorDashFavorite';
import { AuthContext } from '../Providers/AuthProvider';

const fileTypes = ['jpg', 'jpeg', 'png'];

const UpdateForm = () => {
  const { user } = useContext(AuthContext);
  const [dueDate, setDueDate] = useState(new Date());
  const [thumb, setThumb] = useState('');
  const { id } = useParams();
  const [assignmentDetails, setAssignmentDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/assignment/${id}`).then((res) => {
      setAssignmentDetails(res?.data);
      const oldDate = Date.parse(res?.data?.date);
      setDueDate(new Date(oldDate));
      const uploadedThumb = res?.data?.uploadedThumb;
      setThumb(uploadedThumb);
    });
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleThumb = (file) => {
    setThumb(file);
  };

  useEffect(() => {
    setValue('date', dueDate);
    setValue('thumb', thumb);
  }, [dueDate, setValue, thumb]);

  const handleOnSubmit = async (data) => {
    for (let key in data) {
      if (!data[key]) {
        data[key] = assignmentDetails[key];
      }
    }

    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    const result = await axios({
      method: 'PATCH',
      url: `/assignment/${id}`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    if (result?.data?.modifiedCount > 0) {
      toast.success('Assignment updated Successfully');
      navigate(`/all-assignments`);
    }

    if (errors) console.log(errors);
  };

  if (!assignmentDetails) {
    return (
      <div className="container max-w-screen-md mx-auto flex flex-col items-center">
        <DoorDashFavorite />
      </div>
    );
  }

  if (user?.email === assignmentDetails?.publisher_email) {
    return (
      <form
        className="w-full max-w-4xl rounded-md shadow-lg bg-platinum/20 p-10 mt-5 mb-20 mx-auto min-h-[500px] flex flex-col sm:grid sm:grid-cols-12 items-center gap-10"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="sm:col-span-5 w-full h-full rounded-md">
          {/* Darg and Drop zone */}
          <FileUploader
            handleChange={handleThumb}
            types={fileTypes}
          >
            <div className="flex flex-col justify-center items-center min-h-[300px] w-full bg-platinum/30 rounded-2xl mb-5 border-platinum border-2 border-dashed cursor-pointer overflow-hidden">
              {thumb ? (
                <div className="h-full flex-1 flex flex-col relative p-1 overflow-hidden">
                  <img
                    src={typeof thumb === 'string' ? thumb : URL.createObjectURL(thumb)}
                    alt="thumbnail"
                    className="flex-1 h-full w-auto object-cover rounded-xl"
                  />
                  <button
                    type="button"
                    className="py-1.5 px-5 text-sm font-semibold bg-platinum text-rich/75 rounded-full w-48 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center shadow-lg"
                  >
                    <CgArrowsExchangeAltV className="text-xl" /> Change Thumbnail
                  </button>
                </div>
              ) : (
                <div className="flex flex-col text-center items-center gap-1 ">
                  <LuImagePlus className="text-3xl text-rich/70" />
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
              Thumbnail Image URL
            </label>
            <input
              type="text"
              id="thumbnailUrl"
              className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:outline-mandarin  focus:border-mandarin focus:ring-mandarin dark:border-rich"
              placeholder="Enter the url of the thumbnail image"
              {...register('thumbnailUrl', { value: assignmentDetails?.thumbnailUrl })}
            />
          </div>
        </div>
        <div className="sm:col-span-7 w-full flex flex-col gap-y-5">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium dark:text-white"
            >
              Assignment Title
            </label>
            <input
              type="text"
              id="title"
              className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:outline-mandarin  focus:border-mandarin focus:ring-mandarin dark:border-rich"
              placeholder="Enter the title of the assignment"
              {...register(
                'title',
                { value: assignmentDetails?.title },
                {
                  required: 'Assignment title is required',
                }
              )}
            />
            {errors.title && <p className="text-sm mt-1 text-red-500">{errors.title?.message}</p>}
          </div>
          {/* Marks */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="marks"
              className="block text-sm font-medium dark:text-white"
            >
              Assignment Marks
            </label>
            <input
              type="number"
              id="marks"
              className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:outline-mandarin  focus:border-mandarin focus:ring-mandarin dark:border-rich"
              placeholder="Enter the title of the assignment"
              {...register(
                'marks',
                { value: assignmentDetails?.marks },
                {
                  required: 'Assignment marks is required',
                }
              )}
            />
            {errors.marks && <p className="text-sm mt-1 text-red-500">{errors.marks?.message}</p>}
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
                defaultValue={assignmentDetails?.difficulty}
                {...register('difficulty', {
                  required: 'Difficulty level is required',
                })}
              >
                <option
                  value="default"
                  disabled
                  hidden
                >
                  Select difficulty from options
                </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </>
            {errors.difficulty && <p className="text-sm mt-1 text-red-500">{errors.difficulty?.message}</p>}
          </div>
          {/* Due Date */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium dark:text-white"
            >
              Due Date
            </label>
            <DatePicker
              className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:outline-mandarin  focus:border-mandarin focus:ring-mandarin dark:border-rich"
              selected={dueDate}
              onChange={(date) => {
                setDueDate(date);
                console.log(date);
              }}
              value={assignmentDetails?.data?.date}
            />
          </div>
          {/* Description */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium dark:text-white"
            >
              Description
            </label>
            <textarea
              className="py-3 px-4 block w-full border bg-white border-platinum rounded-lg focus-visible:outline-mandarin  focus:border-mandarin focus:ring-mandarin dark:border-rich"
              rows={3}
              placeholder="This is a textarea placeholder"
              defaultValue={''}
              {...register(
                'description',
                { value: assignmentDetails?.description },
                {
                  required: 'Assignment description is required',
                }
              )}
            />
            {errors.description && <p className="text-sm mt-1 text-red-500">{errors.description?.message}</p>}
          </div>
        </div>
        <div className="col-span-12 w-full flex justify-center py-5">
          <button
            type="submit"
            className="w-full max-w-md py-3.5 px-4 inline-flex gap-x-2 text font-semibold uppercase justify-center items-center rounded-full border border-mandarin/50 bg-mandarin text-rich shadow-sm hover:bg-mandarin/75 duration-200 transition-colors"
          >
            <TiDocumentAdd className="text-xl" />
            Update Assignment
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="w-full h-full grow flex flex-col justify-center items-center text-center">
      <h3>You are not authorized to update this assignment</h3>
    </div>
  );
};

export default UpdateForm;
