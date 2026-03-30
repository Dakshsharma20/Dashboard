import {
  Home,
  BarChart2,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  { icon: Home, path: "/", label: "Dashboard" },
  { icon: BarChart2, path: "/analytics", label: "Analytics" },
  { icon: Users, path: "/users", label: "Users" },
  { icon: Settings, path: "/setting", label: "Setting" },
];

export default function Sidebar() {
  return (
    <div className="h-screen sticky top-0 z-1 w-20 bg-gradient-to-b from-indigo-600 to-purple-700 
    flex flex-col items-center py-6 relative shadow-xl">

      {/* LOGO */}
      <h1 className="text-white text-lg font-bold mb-10 tracking-wide">
        CM
      </h1>

      {/* MENU */}
      <div className="flex flex-col gap-6 items-center">

        {menu.map((item, i) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `group relative flex items-center justify-center w-12 h-12 rounded-xl transition
                ${
                  isActive
                    ? "bg-white text-indigo-600 shadow-lg scale-110"
                    : "text-white hover:bg-white/20"
                }`
              }
            >
              <Icon size={20} />

              {/* 🔥 ACTIVE SIDE INDICATOR */}
              <span className="absolute -right-2 w-1 h-6 bg-white rounded-full opacity-0 group-[.active]:opacity-100"></span>

              {/* 💡 TOOLTIP */}
              <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>

      {/* LOGOUT */}
      <div className="mt-auto">
        <div className="group relative flex items-center justify-center w-12 h-12 rounded-xl text-white hover:bg-red-500 transition cursor-pointer">
          <LogOut size={20} />
          <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}