import React from 'react';

const PaymentsTable = () => {
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
            <td className="text-left" colSpan={2}>
              2 dager
            </td>
            <td colSpan={2} className={'text-left'}>
              4084,-
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td>20.12.2021</td>
            <td>Tiltak</td>
            <td>100 %</td>
            <td>509,-</td>
            <td></td>
          </tr>
          <tr className="border-b border-gray-200">
            <td>20.12.2021</td>
            <td>Tiltak</td>
            <td>100 %</td>
            <td>509,-</td>
            <td></td>
          </tr>
          <tr className="border-b border-gray-200">
            <td>20.12.2021</td>
            <td>Tiltak</td>
            <td>50 %</td>
            <td>255,-</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;
