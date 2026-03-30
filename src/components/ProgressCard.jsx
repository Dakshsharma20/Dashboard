export default function ProgressCard() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <h3 className="text-sm text-gray-500 mb-3">
        Performance
      </h3>

      {/* CIRCLE */}
      <div className="flex items-center justify-center my-6">
        <div className="w-24 h-24 rounded-full border-[10px] 
        border-indigo-500 flex items-center justify-center text-lg font-bold text-gray-700">
          75%
        </div>
      </div>

      {/* DETAILS */}
      <div className="space-y-2 text-sm">

        <div className="flex justify-between">
          <span className="text-gray-500">Completed</span>
          <span className="font-medium">75%</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Remaining</span>
          <span className="font-medium">25%</span>
        </div>

      </div>

      {/* BUTTON */}
      <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-xl text-sm hover:bg-indigo-600 transition">
        Upgrade
      </button>

    </div>
  );
}