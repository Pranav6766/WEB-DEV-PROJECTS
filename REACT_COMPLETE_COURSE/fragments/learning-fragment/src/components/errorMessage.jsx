const ErrorMessage = ({ list }) => {
  return list.length === 0 ? <h4>List is empty.</h4> : null;
};
export default ErrorMessage;
