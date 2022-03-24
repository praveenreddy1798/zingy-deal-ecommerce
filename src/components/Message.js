import { useEffect } from "react";
import { useToast } from "../context/toast";
import { dispatchHideToastWithDelay } from "../utils/toast";

export const Message = () => {
  const { toastState, toastDispatch } = useToast();
  const { toast } = toastState;
  const { isVisible, successMessage, errorMessage } = toast;

  useEffect(() => {
    if (isVisible) {
      dispatchHideToastWithDelay(toastDispatch);
    }
  }, [isVisible, toastDispatch]);
  return (
    <>
      {isVisible && successMessage && (
        <div class="alert alert-success position-absolute">
          <i class="fa fa-check-circle fa-2x"></i>
          <p class="small-text semi-bold">{successMessage}</p>
        </div>
      )}
      {isVisible && errorMessage && (
        <div class="alert alert-danger position-absolute">
          <i class="fa fa-exclamation-triangle fa-2x"></i>
          <p class="small-text semi-bold">{errorMessage}</p>
        </div>
      )}
    </>
  );
};
