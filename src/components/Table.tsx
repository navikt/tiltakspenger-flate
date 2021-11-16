import React from 'react';

interface Column<Values> {
  name: string;
  key: Values;
}

interface Props<T> {
  data: T[];
  columns: Column<keyof T>[];
}

const BehandlingsTag = () => {
  return (
    <div className="h-20 w-20 flex justify-center border border-purple-200 bg-purple-100 rounded text-xs font-bold">
      F
    </div>
  );
};

const Table = <T extends {}>({ data, columns }: Props<T>) => {
  return (
    <table className="ml-40">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="first:pl-16 text-left pr-40 h-32">
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className="text-left h-32 odd:bg-gray-100 border-t-2 last:border-b-2 border-gray-200"
          >
            {columns.map((column, index) => (
              <td key={index} className="first:pl-16 pr-40">
                {column.key === 'treatmentType' ? (
                  <BehandlingsTag />
                ) : (
                  row[column.key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
