import { useState } from 'react';

const useEmiCalculator = () => {
  const [emi, setEmi] = useState(0);
  const [schedule, setSchedule] = useState([]);

  const calculate = (P, rate, years) => {
    const R = rate / 12 / 100;
    const N = years * 12;

    const emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiCalc.toFixed(2));

    let balance = P;
    const amortization = [];

    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emiCalc - interest;
      balance -= principal;

      amortization.push({
        month: i,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : '0.00',
      });
    }

    setSchedule(amortization);
  };

  return { emi, schedule, calculate };
};

export default useEmiCalculator;