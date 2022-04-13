import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { soknadPath } from '../routes';

interface Column<Values> {
  name: string;
  key: Values;
}

interface Props<T> {
  data: T[];
  columns: Column<keyof T>[];
}

const Table = <T extends { soknadId: string | number }>({
  data,
  columns,
}: Props<T>) => {
  const navigate = useNavigate();

  const handleClick = (soknadId: string) => navigate(soknadPath(soknadId));

  return (
    <table>
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
            onClick={() => handleClick(row.soknadId.toString())}
            key={index}
            className="cursor-pointer text-left h-32 odd:bg-gray-100 border-t-2 last:border-b-2 border-gray-200"
          >
            {columns.map((column, index) => (
              <td key={index} className="first:pl-16 pr-40">
                {row[column.key] as unknown as ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
