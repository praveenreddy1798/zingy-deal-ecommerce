import { Link } from "react-router-dom";
import { RenderForm } from "../components/RenderForm";
import { Navbar } from "../components/Navbar";
import { loginFormDataFields } from "../form-data/login";
import { useForm } from "../hooks/useForm";
import { validateLoginForm } from "../form-validation/login";
import { useLogin } from "../services";
import { useEffect } from "react";
import { Message } from "../components/Message";

const Login = () => {
  const handleLogin = (payload) => {
    requestLogin("/api/auth/login", payload);
  };
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setValues,
  } = useForm(handleLogin, validateLoginForm);
  const { requestLogin, token } = useLogin();

  useEffect(() => {
    if (token) {
      setValues({});
    }
  }, [token, setValues]);

  return (
    <div class="page-wrapper">
      <Navbar />
      <main class="main-section main-section-strech flex-center pd-md">
        <Message />
        <div class="flex-center bg-white w-max-content">
          <form onSubmit={handleSubmit}>
            <div class="flex-vertical pd-xlg w-max-content">
              <h3 class="text-align-center">Login</h3>
              <RenderForm
                values={values}
                errors={errors}
                handleChange={handleChange}
                isSubmitting={isSubmitting}
                formFieldsData={loginFormDataFields}
              />
              <button
                onClick={handleSubmit}
                class="btn btn-action w-100 mg-t-md"
              >
                Login
              </button>
              <Link to="/signup">
                <button class="btn btn-secondary outline outline-secondary w-100 mg-t-sm">
                  Create New Account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
