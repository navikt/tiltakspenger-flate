import React from 'react';

interface Utbetaling {
  date: string;
  grad: number;
  amount: number;
  merknad: string | undefined;
}

const utbetalinger: Utbetaling[] = [
  { date: '20.12.2021', grad: 100, amount: 255, merknad: undefined },
  { date: '19.12.2021', grad: 100, amount: 255, merknad: undefined },
  { date: '18.12.2021', grad: 100, amount: 255, merknad: undefined },
  { date: '17.12.2021', grad: 50, amount: 127, merknad: undefined },
];

const PaymentsTable = () => {
  const total = utbetalinger.reduce((acc, next) => acc + next.amount, 0);

  return (
    <div className="mt-8 m-4">
      <table className="w-full">
        <thead>
          <tr className="border-b border-black">
            <th className="min-h-full w-28">Dato</th>
            <th className="min-h-full w-28">Utbet.dager</th>
            <th className="min-h-full w-28">Grad</th>
            <th className="min-h-full w-28">Utbetaling</th>
            <th className="min-h-full w-28">Merknader</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-black">
            <td>TOTAL</td>
            <td>2 dager</td>
            <td>Grad</td>
            <td>{total},-</td>
          </tr>
          {utbetalinger.map((utbetaling, index) => (
            <tr className="border-b border-gray-200" key={index}>
              <td>{utbetaling.date}</td>
              <td>Tiltak</td>
              <td>{utbetaling.grad}</td>
              <td>{utbetaling.amount}</td>
              <td>{utbetaling.merknad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;
