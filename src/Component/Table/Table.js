import React from 'react';
import './Table.css';
import { useReactTable, getCoreRowModel, flexRender} from '@tanstack/react-table';
const Table = ({ data, initialColumns, columnVisibility, setColumnVisibility, search }) => {
  const table = useReactTable({
    data,
    columns: initialColumns,
    getCoreRowModel: getCoreRowModel(),
    state: { columnVisibility },
    globalFilter: search,
    onColumnVisibilityChange: setColumnVisibility,
  });
  const { pageIndex, pageSize } = table.getState().pagination;
  return (
    <div className="table-scroll">
      <table className="styled-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                columnVisibility[header.id] && ( 
                  <th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                )
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize).map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                columnVisibility[cell.column.id] && (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                )
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <span>
          Page {pageIndex + 1} of {table.getPageCount()}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
