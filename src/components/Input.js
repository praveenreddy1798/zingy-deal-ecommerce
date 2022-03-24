import { useState } from "react";
export const Input = ({
  name,
  value,
  error,
  label,
  type,
  handleChange,
  isSubmitting = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div key={name} class="mg-t-sm">
      <label for="name" class="flex regular-dark black-color mg-b-xxsm">
        {label}
      </label>
      <div>
        <input
          id={name}
          class="input border-radius-sm"
          type={name === "password" && showPassword ? "text" : type}
          value={value}
          name={name}
          onChange={handleChange}
        />
        {name === "password" && (
          <i
            onClick={() => setShowPassword(!showPassword)}
            className={
              !showPassword ? "password fa fa-eye-slash" : "password fa fa-eye"
            }
            aria-hidden="true"
          ></i>
        )}
      </div>
      {error && isSubmitting && (
        <h4 class="flex regular-dark danger-color mg-t-xxsm">{error}</h4>
      )}
    </div>
  );
};
