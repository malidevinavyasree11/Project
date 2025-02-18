import React from 'react';
import './Column.css'
const Column = ({ initialColumns, columnVisibility, toggleColumnVisibility,resetColumnVisibility  }) => {
  return (
    <div className="dropdown-menu">
      <button className='reset' onClick={resetColumnVisibility}>Reset</button>
      {Array.isArray(initialColumns) && initialColumns.length > 0 ? (
        initialColumns.map((column) => column.accessorKey && (
          <p key={column.accessorKey}>
            {columnVisibility[column.accessorKey] !== undefined && (
              <input type="checkbox" checked={columnVisibility[column.accessorKey] || false} 
              onChange={() => toggleColumnVisibility(column.accessorKey)}/>
            )}
            {column.header}
          </p>
        ))
      ) : (
        <p>No columns available</p>
      )}
    </div>
  );
};
export default Column;
