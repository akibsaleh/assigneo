import { useForm } from 'react-hook-form';
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="grid gap-y-4">
        {/* Form Group */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm mb-2 dark:text-white"
          >
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              className={`py-3 px-4 block w-full border ${
                errors.name && '!border-red-400'
              } border-gray-200 bg-white rounded-md text-sm focus:border-slate-500 focus:ring-slate-500 dark:border-gray-700 dark:text-gray-400`}
              {...register('name', { required: 'Please enter your full name' })}
            />
          </div>
          {errors.name && <p className="text-sm mt-1 text-red-500">{errors.photoUrl?.message}</p>}
        </div>
        {/* End Form Group */}
        {/* Form Group */}
        <div>
          <label
            htmlFor="photoUrl"
            className="block text-sm mb-2 dark:text-white"
          >
            Profile Photo
          </label>
          <div className="relative">
            <input
              type="url"
              id="photoUrl"
              className="py-3 px-4 block w-full border border-gray-200 bg-white rounded-md text-sm focus:border-slate-500 focus:ring-slate-500 dark:border-gray-700 dark:text-gray-400"
              {...register('photoUrl', {
                required: false,
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: 'Please enter a valid URL',
                },
              })}
            />
          </div>
          {errors.photoUrl && <p className="text-sm mt-1 text-red-500">{errors.photoUrl?.message}</p>}
        </div>
        {/* End Form Group */}
        {/* Form Group */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm mb-2 dark:text-white"
          >
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              className={`py-3 px-4 block w-full border ${
                errors.email && '!border-red-400'
              } border-gray-200 bg-white rounded-md text-sm focus:border-slate-500 focus:ring-slate-500 dark:border-gray-700 dark:text-gray-400`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
            />
          </div>
          {errors.email && (
            <p
              role="alert"
              className="text-sm text-red-500 mt-1"
            >
              {errors.email?.message}
            </p>
          )}
        </div>
        {/* End Form Group */}
        {/* Form Group */}
        <div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="password"
              className="block text-sm mb-2 dark:text-white"
            >
              Password
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              className={`py-3 px-4 block w-full border ${
                errors.password && '!border-red-400'
              } border-gray-200 bg-white rounded-md text-sm focus:border-slate-500 focus:ring-slate-500 dark:border-gray-700 dark:text-gray-400`}
              {...register('password', {
                required: 'Password is required',
                validate: {
                  atleast6Character: (value) => /^.{6,}$/.test(value) || 'Password must be at least 6 characters long',
                  atleast1Uppercase: (value) => /^(?=.*[A-Z]).+$/.test(value) || 'Password must be at least 1 uppercase',
                  atleast1lowercaser: (value) => /^(?=.*[a-z]).+$/.test(value) || 'Password must be at least 1 lowercase',
                  atleast1lspecial: (value) => /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).+$/.test(value) || 'Password must be at least 1 special charecter',
                },
              })}
            />
          </div>
        </div>
        {/* End Form Group */}
        <button
          type="submit"
          className="mt-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-mandarin text-rich hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
