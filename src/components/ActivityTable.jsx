export default function ActivityTable() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h3 className="mb-3 font-semibold text-gray-700">
        Recent Activity
      </h3>

      <div className="text-sm space-y-3">
        <div className="flex justify-between">
          <span>User signed up</span>
          <span className="text-gray-400">2m ago</span>
        </div>

        <div className="flex justify-between">
          <span>Order placed</span>
          <span className="text-gray-400">10m ago</span>
        </div>

        <div className="flex justify-between">
          <span>Payment completed</span>
          <span className="text-gray-400">30m ago</span>
        </div>
      </div>
    </div>
  );
}