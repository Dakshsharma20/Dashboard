import { useState } from "react";

export default function SettingsPanel() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-6">

      {/* LEFT MENU */}
      <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
        <p className="font-medium text-gray-700">Profile</p>
        <p className="text-gray-500">Security</p>
        <p className="text-gray-500">Preferences</p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm space-y-6">

        {/* PROFILE */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-3">
            Profile Info
          </h2>

          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://i.pravatar.cc/60"
              className="w-14 h-14 rounded-full"
            />
            <button className="text-sm text-indigo-500">
              Change Avatar
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="Full Name"
              className="border p-2 rounded-xl text-sm outline-none"
            />
            <input
              placeholder="Email"
              className="border p-2 rounded-xl text-sm outline-none"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-3">
            Change Password
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="password"
              placeholder="New Password"
              className="border p-2 rounded-xl text-sm"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-2 rounded-xl text-sm"
            />
          </div>
        </div>

        {/* PREFERENCES */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-3">
            Preferences
          </h2>

          <div className="space-y-3">

            {/* TOGGLE */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Email Notifications
              </span>

              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-10 h-5 rounded-full ${
                  notifications ? "bg-indigo-500" : "bg-gray-300"
                } relative`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition ${
                    notifications ? "left-5" : "left-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Dark Mode
              </span>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-10 h-5 rounded-full ${
                  darkMode ? "bg-indigo-500" : "bg-gray-300"
                } relative`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition ${
                    darkMode ? "left-5" : "left-0.5"
                  }`}
                />
              </button>
            </div>

          </div>
        </div>

        {/* SAVE BUTTON */}
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-indigo-600 transition">
          Save Changes
        </button>

      </div>

    </div>
  );
}