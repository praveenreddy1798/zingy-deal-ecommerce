import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { RenderForm } from "../components/RenderForm";
import { signupFormDataFields } from "../form-data/signup";
import { validateSignupForm } from "../form-validation/signup";
import { useForm } from "../hooks/useForm";
import { useSignup } from "../services";

const Signup = () => {
  const handleSignup = (payload) => {
    requestSignup("/api/auth/signup", payload);
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setValues,
  } = useForm(handleSignup, validateSignupForm);
  const { requestSignup, token } = useSignup("/api/auth/signup");

  useEffect(() => {
    if (token) {
      setValues({});
    }
  }, [token, setValues]);
  return (
    <div class="page-wrapper">
      <Navbar />
      <main class="main-section main-section-strech flex-center pd-md">
        <div class="flex-center bg-white w-max-content">
          <form onSubmit={handleSubmit}>
            <div class="flex-vertical pd-xlg w-max-content">
              <h3 class="text-align-center">Signup</h3>
              <RenderForm
                values={values}
                errors={errors}
                handleChange={handleChange}
                isSubmitting={isSubmitting}
                formFieldsData={signupFormDataFields}
              />
              <Link to="/signup">
                <button
                  onClick={handleSubmit}
                  class="btn btn-action w-100 mg-t-md"
                >
                  Signup
                </button>
              </Link>
              <Link to="/login">
                <button class="btn btn-secondary outline outline-secondary w-100 mg-t-sm">
                  Already have an account ?
                </button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
