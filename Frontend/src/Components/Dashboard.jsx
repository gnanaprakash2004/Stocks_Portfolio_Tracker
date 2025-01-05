function Dashboard() {
  return (
    // Outer container with full width and height for the background
    <div className="bg-gray-100 w-full h-screen fixed top-0 left-0">
      {/* Centered content container with max width constraint */}
      <div className="flex justify-center items-center w-full h-full p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-screen-xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Portfolio Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-blue-700">Total Stocks</h3>
              <p className="text-2xl font-semibold text-gray-800">10</p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-green-700">Total Value</h3>
              <p className="text-2xl font-semibold text-gray-800">$20,000</p>
            </div>
            <div className="p-6 bg-red-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-red-700">Total Profit/Loss</h3>
              <p className="text-2xl font-semibold text-gray-800">+$1,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
