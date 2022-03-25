export const Loader = ({ loading }) => {
  return (
    loading && (
      <div class="loader-container position-absolute h-100">
        <div class="loader"></div>
      </div>
    )
  );
};
