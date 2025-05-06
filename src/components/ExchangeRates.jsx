import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/constant";
import ErrorPage from "./ErrorPage";

const ExchangeRates = () => {
  const [rate, setRate] = useState([]);
  const getRates = async () => {
    try {
      const data = await axios.get(
        "https://v6.exchangerate-api.com/v6/" + API_KEY + "/latest/USD"
      );
      setRate(data.data.conversion_rates);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  console.log(rate);
  useEffect(() => {
    getRates();
  }, []);

  return rate.length > 0 ? (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Currency Exchange Rates</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Currency</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Rate (per USD)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(rate).map(([currency, r]) => (
              <tr key={currency} className="hover:bg-gray-50">
                <td className="px-6 py-3 border-b text-gray-900 font-medium">{currency}</td>
                <td className="px-6 py-3 border-b text-gray-700">{r}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ):(
    <h1 className="text-3xl text-center my-[100px]">Error...Request failed with status code 429</h1>
  )
};

export default ExchangeRates;
