export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="text-2xl font-bold p-6 border-b border-blue-800">
          CoreUI
        </div>
        <nav className="flex-1 p-4 space-y-2 text-sm">
          <a href="#" className="block px-4 py-2 rounded bg-blue-800">Dashboard</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-800">Users</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-800">Settings</a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-800">Dashboard</div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">🔔</button>
            <button className="text-gray-600 hover:text-gray-800">⚙️</button>
            <img
              src="https://i.pravatar.cc/30"
              alt="profile"
              className="rounded-full w-8 h-8"
            />
          </div>
        </header>

        {/* Content area */}
        <main className="p-6 space-y-6 overflow-y-auto">
          {/* Card summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SummaryCard color="bg-blue-500" />
            <SummaryCard color="bg-sky-400" />
            <SummaryCard color="bg-yellow-400" />
            <SummaryCard color="bg-red-400" />
          </div>

          {/* Placeholder for traffic chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Traffic</h2>
              <div className="flex space-x-2 text-sm">
                <button className="px-3 py-1 bg-blue-600 text-white rounded">Month</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-gray-600">Day</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-gray-600">Year</button>
              </div>
            </div>
            <div className="h-64 bg-blue-100 flex items-center justify-center text-blue-700">
              [ Gráfico de tráfico aquí ]
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Subcomponente para tarjetas
function SummaryCard({ color = "bg-blue-500" }) {
  return (
    <div className={`${color} text-white rounded-lg p-4 shadow`}>
      <div className="text-2xl font-bold">9.823</div>
      <div className="text-sm">Members online</div>
      <div className="mt-2 opacity-80 text-xs">[ mini gráfico aquí ]</div>
    </div>
  );
}
