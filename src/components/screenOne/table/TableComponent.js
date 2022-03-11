import React, { useContext, useEffect } from "react";
import { useTable, usePagination } from 'react-table';
import { AppContext } from "../../../contexts/AppContext";
import { updateRawsByClassName } from "../../../helpers/helper";

export function TableComponent({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  )
    const { setChartData, setUserData, setTablePage, tablePage, userData } = useContext(AppContext);

    useEffect(() => {
      if (tablePage) {
        gotoPage(tablePage);
      }
    }, [tablePage, gotoPage]);

    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} className={`table-raw ${userData.id === row.original.id ? "selected" : ""}`}
                  onClick={(e) => {
                    updateRawsByClassName("table-raw");
                    setChartData(row.original.data);
                    setUserData({id: row.original.id, name: row.original.name, surname: row.original.surname});
                    setTablePage(state.pageIndex)
                  }}
                >
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
            <tr className="pagination">
              <td></td>
              <td></td>
              <td></td>
              <td className="pagination-buttons">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                  {'<<'}
                </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                  {'<'}
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                  {'>'}
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                  {'>>'}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }