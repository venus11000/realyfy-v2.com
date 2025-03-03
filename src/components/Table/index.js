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
        {data?.length > 0 ? (
          data?.map((row, index) => (
            <tr
              className={classNames(
                "hover:bg-slate-50",
                index % 2 !== 0 ? "bg-slate-50" : ""
              )}
            >
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
          ))
        ) : (
          <tr>
            <td
              className="px-4 py-2 bg-gray-100 text-gray-600 text-center"
              colSpan={columns?.length}
            >
              No Data...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
