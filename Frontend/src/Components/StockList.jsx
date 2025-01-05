import React from 'react';

function StockList() {
  const stocks = [
    { id: 1, name: 'Apple', ticker: 'AAPL', quantity: 10, buyPrice: 150 },
    { id: 2, name: 'Tesla', ticker: 'TSLA', quantity: 5, buyPrice: 700 },
  ];

  const handleEdit = (id) => {
    console.log('Edit', id);
  };

  const handleDelete = (id) => {
    console.log('Delete', id);
  };

  return (
    // Outer container with full width and height for the background
    <div className="bg-gray-100 w-full h-screen fixed top-0 left-0">
      {/* Centered content container with max width constraint */}
      <div className="flex justify-center items-center w-full h-full p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-screen-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Holdings</h2>
          {/* Table container with horizontal scrolling on smaller screens */}
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg overflow-hidden shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 border text-left text-gray-800">Name</th>
                  <th className="p-4 border text-left text-gray-800">Ticker</th>
                  <th className="p-4 border text-left text-gray-800">Quantity</th>
                  <th className="p-4 border text-left text-gray-800">Buy Price</th>
                  <th className="p-4 border text-left text-gray-800">Actions</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((stock) => (
                  <tr key={stock.id} className="hover:bg-gray-100 transition-colors duration-200">
                    <td className="p-4 border text-center text-gray-700">{stock.name}</td>
                    <td className="p-4 border text-center text-gray-700">{stock.ticker}</td>
                    <td className="p-4 border text-center text-gray-700">{stock.quantity}</td>
                    <td className="p-4 border text-center text-gray-700">${stock.buyPrice}</td>
                    <td className="p-4 border text-center space-x-4">
                      <button
                        onClick={() => handleEdit(stock.id)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:ring focus:ring-yellow-200 transition duration-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(stock.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:ring focus:ring-red-200 transition duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockList;
