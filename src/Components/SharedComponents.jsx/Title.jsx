import PropTypes from 'prop-types';
const Title = ({ title, subTitle }) => {
  return (
    <div className="w-full container text-center mx-auto py-10">
      <h1 className="text-rich font-bold capitalize dark:text-white">{title}</h1>
      <h6 className="text-rich/50 capitalize dark:text-gray-300">{subTitle}</h6>
    </div>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
