import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!currentUser) return null;
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo added here */}
          <img
            src="/adgscribe-logo.png"
            alt="ADGScribe.ai Logo"
            className="h-8"
          />
          <button
            onClick={handleLogout}
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Welcome back, {currentUser.name}!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Your current subscription is the{" "}
            <span className="font-medium text-[#39C5E5]">
              {currentUser.plan}
            </span>
            .
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <h3 className="text-lg font-medium text-gray-900">
              My Transcriptions
            </h3>
            <p className="mt-2 text-gray-600">
              You have 3 recent transcriptions.
            </p>
            <button
              onClick={() => navigate("/transcriptions")}
              className="mt-4 rounded-md bg-[#39C5E5] py-2 px-4 text-sm font-medium text-white hover:bg-[#2ab6d6]"
            >
              View Transcriptions {/* <-- 2. Change button text */}
            </button>
          </div>
          {/* END MODIFIED CARD */}

          <div className="overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <h3 className="text-lg font-medium text-gray-900">
              Recent Activity
            </h3>
            <p className="mt-2 text-gray-600">
              Generated 12 new ad copies today.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <h3 className="text-lg font-medium text-gray-900">
              Account Settings
            </h3>
            <p className="mt-2 text-gray-600">Email: {currentUser.email}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
