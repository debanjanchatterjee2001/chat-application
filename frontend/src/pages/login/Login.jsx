import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(data);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="flex gap-2 text-3xl font-semibold items-center justify-center text-gray-300">
          Login to
          <span className="flex items-center text-blue-600">
            Word<span className="text-yellow-400">Hive</span>
            <img src="/honeycomb.png" alt="logo" width={40} height={40} />
          </span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-6 form-control justify-center gap-4"
        >
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </label>
          <span className="text-center">
            New to{" "}
            <span className="text-blue-600">
              Word<span className="text-yellow-400">Hive</span>
            </span>
            ?{" "}
            <Link
              to="/signup"
              className="text-gray-300 font-semibold hover:underline hover:text-blue-400"
            >
              Register
            </Link>
          </span>
          <button
            type="submit"
            className="btn btn-block btn-primary"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
