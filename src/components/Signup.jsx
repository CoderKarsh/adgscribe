import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Signup is for demo. Please use a hardcoded account to log in.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        <div className="mb-8 flex justify-center">
          <img
            src="/adgscribe-logo.png"
            alt="ADGScribe.ai Logo"
            className="h-10"
          />
        </div>
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
          Create Account
        </h2>

        {message && (
          <p className="mb-4 rounded-md bg-blue-100 p-3 text-center text-sm text-[#2ab6d6]">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-4"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-4"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full justify-center rounded-md border border-transparent bg-[#39C5E5] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#2ab6d6] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-[#39C5E5] hover:text-blue-500"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
