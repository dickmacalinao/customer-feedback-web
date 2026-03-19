import { useState } from "react";

import RowActionMenu from "./RowActionMenu";

type Column<T> = {
  key: keyof T;
  label: string;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
  allowAction?: boolean;
  onView?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
};

export default function DataTable<T extends { id: number }>({
  data,
  columns,
  pageSize = 5,
  allowAction = true,
  onView,
  onEdit,
  onDelete,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.label}</th>
            ))}
            {allowAction && <th className="action">Actions</th>}
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={String(col.key)}>{String(row[col.key])}</td>
              ))}

              {allowAction && (
                <td className="action">
                  {/*
                  <div className="actions">
                    <select
                      onChange={(e) => {
                        const action = e.target.value;

                        if (action === "view") onView?.(row);
                        if (action === "edit") onEdit?.(row);
                        if (action === "delete") onDelete?.(row);
                      }}
                    >
                      <option value="">Actions</option>
                      <option value="view">View</option>
                      <option value="edit">Edit</option>
                      <option value="delete">Delete</option>
                    </select>
                  </div>
                  */}
                  <RowActionMenu
                    row={row}
                    onView={onView}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        {currentPage > 1 && (
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>
        )}

        {/*}
        <span>
          Page {currentPage} of {totalPages}
        </span>
        */}

        {currentPage < totalPages && (
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
