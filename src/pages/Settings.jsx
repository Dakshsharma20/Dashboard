import SettingsPanel from "../components/SettingsPanel";

export default function Settings() {
  return (
    <div className="space-y-6">

      {/* 🔥 HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
          Settings
        </h1>

        {/* OPTIONAL ACTION */}
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-indigo-600 transition w-full sm:w-auto">
          Save Changes
        </button>

      </div>

      {/* 🔥 PANEL */}
      <SettingsPanel />

    </div>
  );
}