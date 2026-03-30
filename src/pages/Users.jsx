import UsersTable from "../components/UsersTable";

export default function Users() {
  return (
    <div className="space-y-6">

      {/* 🔥 HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
          Users Management
        </h1>

        {/* OPTIONAL BUTTON */}
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-indigo-600 transition w-full sm:w-auto">
          + Add User
        </button>

      </div>

      {/* 🔥 TABLE */}
      <UsersTable />

    </div>
  );
}