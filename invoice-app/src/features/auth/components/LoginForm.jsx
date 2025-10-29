import ButtonSpinner from "../../../components/ButtonSpinner";
import useLogin from "../hooks/useLogin";
import usePasswordToggle from "../hooks/usePasswordToggle";

const LoginForm = () => {
  const { register, handleSubmit, isSubmitting, handleLogin, errors } =
    useLogin();

  const { showPassword, togglePasswordVisibility } = usePasswordToggle();

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="space-y-4 md:space-y-6"
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className={`bg-gray-50 border text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            errors.email || errors.pattern
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 focus:ring-blue-600 focus:border-blue-600"
          }`}
          placeholder="name@company.com"
        />
        {errors.email?.type === "required" && (
          <span className="text-xs text-red-500">Email field is required</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="text-xs text-red-500">
            Please enter a valid email address
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="••••••••"
            {...register("password", {
              required: true,
            })}
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              errors.password || errors.pattern
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-600 focus:border-blue-600"
            }`}
          />

          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 dark:text-gray-400"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m9.02 9.02l3.411 3.411M9.88 9.88l-3.41-3.41m9.02 9.02l3.411 3.411M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>
        {errors.password?.type === "required" && (
          <span className="text-xs text-red-500">
            Password field is required
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
          <label
            htmlFor="terms"
            className="ms-2 font-light text-gray-500 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <div>
          <a href="#" className="text-blue-700 text-sm">
            Forgot Password?
          </a>
        </div>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login account {isSubmitting && <ButtonSpinner />}
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don't have an account yet?{" "}
        <a
          href="register"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
