import { NavLink } from "react-router-dom";
import { Home, BarChart2, Users, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-20 h-screen sticky top-0 bg-gradient-to-b from-indigo-500 to-purple-600 flex flex-col items-center py-6 gap-6">

      <h1 className="text-white font-bold text-lg">CM</h1>

      {/* DASHBOARD */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `p-3 rounded-xl ${
            isActive ? "bg-white text-indigo-600" : "text-white"
          }`
        }
      >
        <Home size={20} />
      </NavLink>

      {/* USERS */}
      <NavLink
        to="/users"  
        className={({ isActive }) =>
          `p-3 rounded-xl ${
            isActive ? "bg-white text-indigo-600" : "text-white"
          }`
        }
      >
        <Users size={20} />
      </NavLink>
          
           <NavLink
        to="/setting"
        className={({ isActive }) =>
          `p-3 rounded-xl ${
            isActive ? "bg-white text-indigo-600" : "text-white"
          }`
        }
      ></NavLink>
    </div>
  );
}