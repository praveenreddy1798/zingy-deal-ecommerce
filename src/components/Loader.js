export const Loader = ({ loading }) => {
  return (
    loading && (
      <div class="flex-center h-100">
        <div class="loader"></div>
      </div>
    )
  );
};
