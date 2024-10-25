import React from "react";
import { useNavigate } from "react-router-dom";

const LoginOptions = ({ blockyTextStyle }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-auto">
      <div
        className="space-y-6 bg-white bg-opacity-10 p-20 rounded-lg"
        style={blockyTextStyle}
      >
        <h2 className="text-white text-2xl font-bold mb-4">
          Choose Login Type
        </h2>
        <button
          className="w-full border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300"
          onClick={() => navigate("/user-login")}
        >
          User Login
        </button>
        <div className="space-y-4">
          <h3 className="text-white text-xl font-bold">For Companies:</h3>
          <button
            className="w-full border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300"
            onClick={() => navigate("/company-login")}
          >
            Company Login
          </button>
          <button
            className="w-full border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300"
            onClick={() => navigate("/company-signup")}
          >
            Company Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginOptions;
