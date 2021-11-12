import React from 'react';

interface Column<Values> {
  name: string;
  key: Values;
}

interface Props<T> {
  data: T[];
  columns: Column<keyof T>[];
}

const Table = <T extends {}>({ data, columns }: Props<T>) => {
  return (
    <table>
      <tr>
        {columns.map((column) => (
          <th>{column.name}</th>
        ))}
      </tr>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
