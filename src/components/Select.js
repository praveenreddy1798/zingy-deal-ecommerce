import { Fragment } from "react";
export const Select = ({
  optionData = [],
  label,
  name,
  value,
  error,
  isSubmitting = false,
  handleChange,
}) => {
  return (
    <div key={name} class="mg-t-sm">
      <label for={name} class="flex regular-dark black-color mg-b-xxsm">
        {label}
      </label>
      <select
        name="state"
        id={name}
        class="input select border-radius-sm"
        value={value}
        onChange={handleChange}
      >
        <option disabled selected>
          -- select an option --
        </option>
        {optionData.map((state) => (
          <Fragment key={state}>
            <option value={state}>{state}</option>
          </Fragment>
        ))}
      </select>
      {error && isSubmitting && (
        <h4 class="flex regular-dark danger-color mg-t-xxsm">{error}</h4>
      )}
    </div>
  );
};
