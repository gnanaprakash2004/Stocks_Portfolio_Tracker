import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard.jsx';
import StockForm from './Components/StockForm.jsx';
import StockList from './Components/StockList.jsx';
import Navbar from './Components/Navbar.jsx';

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className="flex-grow overflow-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-stock" element={<StockForm />} />
            <Route path="/stock-list" element={<StockList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
