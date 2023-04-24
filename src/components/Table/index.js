import React from "react";
import { classNames } from "../../utils/helpers/common";

const Table = ({ data, columns }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-slate-300">
          {columns?.map((column) => (
            <th className="p-3">{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, index) => (
          <tr className={classNames("hover:bg-slate-50", index % 2 !== 0 ? "bg-slate-50" : "")}>
            {columns?.map((column) => (
              <td className="p-3">
                {column.Cell
                  ? React.createElement(column.Cell, {
                      index,
                      row,
                    })
                  : row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
