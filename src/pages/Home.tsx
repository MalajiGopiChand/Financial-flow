import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, PieChart, Receipt, Calculator } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Take Control of Your <span className="text-indigo-600">Financial Future</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Track expenses, manage budgets, and achieve your financial goals with our comprehensive personal finance management tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <TrendingUp className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Financial Overview</h3>
          <p className="text-gray-600">Get a clear picture of your finances with intuitive dashboards and reports.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <PieChart className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Budget Planning</h3>
          <p className="text-gray-600">Create and manage budgets to keep your spending on track.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <Receipt className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Transaction Tracking</h3>
          <p className="text-gray-600">Monitor all your transactions in one place with detailed categorization.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <Calculator className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Financial Calculator</h3>
          <p className="text-gray-600">Plan ahead with our suite of financial calculation tools.</p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/signup"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
        >
          Start Managing Your Finances
        </Link>
      </div>
    </div>
  );
}

export default Home;