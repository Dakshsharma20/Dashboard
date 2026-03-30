import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const data = [
  { id: 1, name: "John Doe", email: "john@mail.com", role: "Admin", status: "Active" },
  { id: 2, name: "Sarah Smith", email: "sarah@mail.com", role: "User", status: "Inactive" },
  { id: 3, name: "Alex Brown", email: "alex@mail.com", role: "Editor", status: "Active" },
  { id: 4, name: "Emma Wilson", email: "emma@mail.com", role: "User", status: "Active" },
];

export default function UsersTable() {
  const [search, setSearch] = useState("");

  const filtered = data.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row gap-3 sm:justify-between mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="px-3 py-2 border rounded-xl text-sm w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm w-full sm:w-auto">
          + Add User
        </button>
      </div>

      {/* 🔥 DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-500 text-left border-b">
            <tr>
              <th className="py-3">User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">

                <td className="py-3 flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/40?u=${user.id}`}
                    className="w-9 h-9 rounded-full"
                  />
                  {user.name}
                </td>

                <td>{user.email}</td>

                <td>
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {user.role}
                  </span>
                </td>

                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="flex gap-3">
                  <Pencil size={16} className="text-indigo-500 cursor-pointer" />
                  <Trash2 size={16} className="text-red-500 cursor-pointer" />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 MOBILE CARD VIEW */}
      <div className="md:hidden space-y-4">
        {filtered.map((user) => (
          <div
            key={user.id}
            className="border rounded-xl p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={`https://i.pravatar.cc/40?u=${user.id}`}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <span>{user.role}</span>

              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {user.status}
              </span>
            </div>

            <div className="flex gap-4">
              <Pencil size={16} className="text-indigo-500" />
              <Trash2 size={16} className="text-red-500" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}