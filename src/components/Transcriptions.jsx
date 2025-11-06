import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Hardcoded file list
const transcriptionFiles = [
  {
    id: 1,
    name: "Meeting-2025-11-06.txt",
    path: "/transcripts/transcript-1.txt",
    size: "1.2 KB",
  },
  {
    id: 2,
    name: "AdCopy-Brainstorm.txt",
    path: "/transcripts/transcript-2.txt",
    size: "2.4 KB",
  },
  {
    id: 3,
    name: "UserFeedback-Session.txt",
    path: "/transcripts/transcript-3.txt",
    size: "3.1 KB",
  },
];

function Transcriptions() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
          <Link
            to="/dashboard"
            className="text-sm font-medium text-[#39C5E5] hover:text-blue-500"
          >
            &larr; Back to Dashboard
          </Link>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900">
            My Transcriptions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Here are your 3 most recent files.
          </p>
        </div>

        {/* File List */}
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <ul role="list" className="divide-y divide-gray-200">
            {transcriptionFiles.map((file) => (
              <li
                key={file.id}
                className="flex items-center justify-between p-6"
              >
                <div className="grow">
                  <p className="font-medium text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500">{file.size}</p>
                </div>
                <div className="shrink-0">
                  <a
                    href={file.path}
                    download={file.name}
                    className="rounded-md bg-[#39C5E5] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#2ab6d6] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Transcriptions;
