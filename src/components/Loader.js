export const Loader = ({ loading }) => {
  return (
    loading && (
      <div className="loader-container position-absolute h-100">
        <div className="loader"></div>
      </div>
    )
  );
};
