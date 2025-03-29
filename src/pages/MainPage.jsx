import { useState } from "react";

const MainPage = () => {
  const [balance, setBalance] = useState(5000); // Dummy balance
  

  return (
    <div className="min-h-screen flex flex-col-3 ">
      {/* Hero Section */}
      <div className="w-full py-24 max-w-2xl h-max bg-white  rounded-lg p-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Expense Tracker</h1>
        <p className="text-gray-500 mt-2">Track your income and expenses easily</p>
        <h1 className="text-green-600 lg:text-4xl sm:text-3xl font-bold ">Track Your Money,</h1>
<h1 className=" lg:text-4xl font-bold sm:text-3xl ">Simplify Your Life</h1>
<p className="text-xl italic">Effortlessly track your expenses, understand your spending patterns, and make better financial decisions
</p>

      </div>

      <div className="w-full max-w-2xl h-max bg-white  rounded-lg p-10 text-center">
        {/* <h1 className="text-3xl font-bold text-gray-800">Expense Tracker</h1> */}
        {/* <p className="text-gray-500 mt-2">Track your income and expenses easily</p> */}
        <img src="https://media.istockphoto.com/id/1403527857/photo/young-woman-writes-in-notebook-and-counts-on-calculator-female-in-the-kitchen-is-sitting-at.jpg?s=1024x1024&w=is&k=20&c=mXfxhYNu7hKVUHDASB6RQu-kBWyEDVvILfwWVZjXfRI=" alt="Expense Tracker" className="w-full h-full object-cover rounded-lg mt-4" />
      </div>

      {/* Balance Section */}
      {/* <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 mt-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Total Balance</h2>
        <p className={`text-3xl font-bold ${balance >= 0 ? "text-green-500" : "text-red-500"}`}>
          ₹{balance}
        </p>
      </div> */}

      {/* Transactions Section */}

      {/* Add Expense Button */}
      {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg mt-6">
        + Add Expense
      </button> */}
    </div>
  );
};

export default MainPage;
