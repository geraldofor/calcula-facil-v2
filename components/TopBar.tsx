export default function TopBar() {
  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
            Online
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-gray-600">🔔</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              GF
            </div>
            <span className="text-gray-700">Gerardo</span>
          </div>
        </div>
      </div>
    </header>
  );
}
