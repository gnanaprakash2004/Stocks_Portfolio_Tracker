import { useState } from 'react';

function StockForm() {
  const [stock, setStock] = useState({ name: '', ticker: '', quantity: '', buyPrice: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stock);
    setStock({ name: '', ticker: '', quantity: '', buyPrice: '' });
  };

  return (
    // Outer container with full width and height for the background
    <div className="bg-gray-100 w-full h-screen fixed top-0 left-0">
      {/* Centered Form Container with fixed width */}
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-white p-8 mt-10 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add/Edit Stock</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stock Name</label>
              <input
                type="text"
                name="name"
                value={stock.name}
                onChange={handleChange}
                placeholder="Enter stock name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ticker</label>
              <input
                type="text"
                name="ticker"
                value={stock.ticker}
                onChange={handleChange}
                placeholder="Enter stock ticker"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={stock.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Buy Price</label>
              <input
                type="number"
                name="buyPrice"
                value={stock.buyPrice}
                onChange={handleChange}
                placeholder="Enter buy price"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white  py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StockForm;
