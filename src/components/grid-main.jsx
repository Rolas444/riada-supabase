import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ImSpinner2 } from 'react-icons/im'

import { IoSearchSharp } from "react-icons/io5";
import DebouncedInput from './debounced-input'
import { useEffect, useMemo, useState } from 'react'


const GridMain = ({ data, columns }) => {
  if (data === null) return (<>
    <div className="w-full h-screen flex justify-center items-center">
      <ImSpinner2 className="w-8 h-8 animate-spin text-blue-600" />
    </div>
  </>)

  const [sorting,setSorting] = useState([])
  const [filtering,setFiltering]=useState('')

  const fuzzyFilter = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)

    // Store the itemRank info
    addMeta({
      itemRank,
    })

    // Return if the item should be filtered in/out
    return itemRank.passed
  }

  const [globalFilter, setGlobalFilter] = useState('')

  const ncolumns = useMemo(() => (columns), [])

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
      sorting
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel,
    getFilteredRowModel: getFilteredRowModel(),
    globalFilter: globalFilter,
    // globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel()
  })

  // useEffect(()=>{
  //   if (table.getState().columnFilters[0]?.id==='nombres'){
  //     if(table.getState().sorting[0]?.id !=='nombres'){
  //       table.setSorting([{id:'nombres', desc: false}])
  //     }
  //   }
  // },[table.getState().columnFilters[0]?.id])


  return (
    <>
      <div className='w-full overflow-x  mt-5'>
        <div className='w-full flex justify-end'>
          <div className='w-full lg:w-1/2 relative right-0 my-5'>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <IoSearchSharp className="w-4 h-4 text-gray-500" />
            </div>
            <input
              type='text'
              defaultValue={''}
              value={globalFilter ?? ''}
              onChange={e => setGlobalFilter(e.target.value)}
              className='w-full  p-2  pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                        focus:ring-soft focus:border-soft dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-soft dark:focus:border-soft' />
          </div>
        </div>
        <table className='table-auto  overflow-scroll w-min-fit lg:w-full'>
          <thead className='w-full bg-black text-white'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className='min-w-max w-full '>
                {headerGroup.headers.map(header => (
                  <th key={header.id} 
                    onClick={header.column.getToggleSortingHandler()}
                  className='min-w-max text-left px-4 py-2 cursor-pointer' >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='w-full'>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className='w-full min-w-max hover:bg-gray-800' >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className='min-w-max px-4 py-2 '>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='w-full'>
          <div className='flex gap-5 justify-end items-center'>
            <button onClick={()=>table.setPageIndex(0)}>
              First 
            </button>
            <button onClick={()=>table.previousPage()}>
              {'<'}
            </button>
            <button onClick={()=>table.nextPage()}>
              {'>'}
            </button>
            <button onClick={()=>table.setPageIndex(table.getPageCount()-1)}>
              Last
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GridMain