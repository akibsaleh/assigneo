import Title from '../SharedComponents.jsx/Title';
import UpdateForm from './UpdateForm';

const UpdateAssignment = () => {
  return (
    <div className="bg-white dark:bg-oxford flex flex-col grow px-5 sm:px-0">
      <Title
        title={'Update Assignment'}
        subTitle={'Fill up the form below to update assignment.'}
      />
      <div className="flex flex-col justify-center items-center grow bg-white dark:bg-oxford">
        <UpdateForm />
      </div>
    </div>
  );
};

export default UpdateAssignment;
