import { Bell, Settings } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b px-6 py-4 space-y-4"
    >
      
      <div className="flex justify-between items-center">

        <h1 className="text-lg font-semibold text-gray-800 tracking-wide">
          Dashboard
        </h1>

        <div className="flex items-center gap-3 relative">

          
          <button className="p-2 rounded-xl hover:bg-gray-100 transition">
            <Settings size={18} className="text-gray-600" />
          </button>

          
          <div className="relative">
            <button
              onClick={() => setOpen(open === "notif" ? null : "notif")}
              className="p-2 rounded-xl hover:bg-gray-100 transition relative"
            >
              <Bell size={18} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {open === "notif" && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-xl shadow-lg p-2 text-sm">
                <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">New message</div>
                <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">Update available</div>
              </div>
            )}
          </div>

          
          <div className="relative">
            <button
              onClick={() => setOpen(open === "profile" ? null : "profile")}
              className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-gray-100 transition"
            >
              <img
                src="https://i.pravatar.cc/40"
                className="w-8 h-8 rounded-full border border-gray-200"
              />
              <span className="text-sm font-medium text-gray-700">
                Daksh
              </span>
            </button>

            {open === "profile" && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg p-2 text-sm">
                <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">Profile</div>
                <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">Settings</div>
                <div className="p-2 hover:bg-red-50 text-red-500 rounded cursor-pointer">
                  Logout
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      
    </div>
  );
}