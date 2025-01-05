// import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png'

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* <img src="/logo.png" alt="Logo" className="h-8" /> */}
          <h1 className="text-xl font-bold">Portfolio Tracker</h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100">Dashboard</Link>
          <Link to="/add-stock" className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100">Add Stock</Link>
          <Link to="/stock-list" className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100">Stock List</Link>
        </div>
        <div className="flex items-center space-x-2">
          <span>Welcome, User</span>
          <img src={avatar} alt="User Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
