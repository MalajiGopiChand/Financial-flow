import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, PieChart, Receipt, Calculator, Info, Mail, LogIn, UserPlus } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wallet className="h-6 w-6" />
            <span className="font-bold text-xl">FinanceFlow</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/budget" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <PieChart className="h-4 w-4" />
              <span>Budget</span>
            </Link>
            <Link to="/transactions" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <Receipt className="h-4 w-4" />
              <span>Transactions</span>
            </Link>
            <Link to="/calculator" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <Calculator className="h-4 w-4" />
              <span>Calculator</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
            <Link to="/signup" className="flex items-center space-x-1 bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;