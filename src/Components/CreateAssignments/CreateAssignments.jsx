import Title from '../SharedComponents.jsx/Title';
import AssignmentForm from './AssignmentForm';

const CreateAssignments = () => {
  return (
    <div className="bg-white dark:bg-oxford px-5 sm:px-0">
      <Title
        title={'Create Assignment'}
        subTitle={'Fill up the form below to create a new assignment. All the fields are required'}
      />
      <div className="flex flex-col justify-center items-center grow bg-white dark:bg-oxford ">
        <AssignmentForm />
      </div>
    </div>
  );
};

export default CreateAssignments;
