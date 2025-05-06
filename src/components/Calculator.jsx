import { useState } from 'react';
import useLoanCalculator from '../hooks/useEmiCalculator';
import { useGlobalContext } from '../context/GlobalContext';

const Calculator = () => {
  const { currency, setCurrency } = useGlobalContext();
  const { emi, schedule, calculate } = useLoanCalculator();

  const [loan, setLoan] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');

  const handleReset = () => {
    setLoan('');
    setRate('');
    setTerm('');
    calculate(0, 0, 0);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Loan Calculator</h1>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
    
          className="border p-2 rounded"
          type="number"
          placeholder="Loan Amount"
          value={loan}
          onChange={(e) => setLoan(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Term (Years)"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>

      {/* Calculate Button */}
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => calculate(+loan, +rate, +term)}
      >
        Calculate
      </button>

      {/* EMI & Controls */}
      {emi > 0 && (
        <>
          <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">
              Monthly EMI: <span className="text-green-600">{currency} {emi}</span>
            </h2>

            {/* Currency Dropdown */}
            <div className="flex items-center gap-2">
              <label className="font-medium">Currency:</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="border px-3 py-1 rounded"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="border border-red-500 text-red-600 px-4 py-2 rounded hover:bg-red-100 transition"
            >
              Reset Table
            </button>
          </div>

          {/* Amortization Table */}
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Month</th>
                  <th className="p-2 border">Principal</th>
                  <th className="p-2 border">Interest</th>
                  <th className="p-2 border">Remaining Balance</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item) => (
                  <tr key={item.month}>
                    <td className="p-2 border">{item.month}</td>
                    <td className="p-2 border">{item.principal} {currency}</td>
                    <td className="p-2 border">{item.interest} {currency}</td>
                    <td className="p-2 border">{item.balance} {currency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Calculator;