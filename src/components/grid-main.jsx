import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ImSpinner2 } from 'react-icons/im'

import { IoSearchSharp } from "react-icons/io5";
import DebouncedInput from './debounced-input'
import { useState } from 'react'


const GridMain = ({ data, columns }) => {
  if (data === null) return (<>
    <div className="w-full h-screen flex justify-center items-center">
      <ImSpinner2 className="w-8 h-8 animate-spin text-blue-600" />
    </div>
  </>)
  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter
    },
    getCoreRowModel: getCoreRowModel()

  })




  return (
    <>
      <div className='w-full overflow-x  mt-5'>
        <div className='w-full flex justify-end'>
          <div className='w-full lg:w-1/2 relative right-0 my-5'>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <IoSearchSharp className="w-4 h-4 text-gray-500" />
            </div>
            <DebouncedInput
              value={globalFilter ?? ''}
              onChange={value => setGlobalFilter(String(value))}
              className='w-full  p-2  pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                        focus:ring-soft focus:border-soft dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-soft dark:focus:border-soft' />
          </div>
        </div>
        <table className='table-auto overflow-scroll w-full'>
          <thead className='w-full bg-black text-white'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className='min-w-max w-full '>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className='min-w-max text-left px-4 py-2' >
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
      </div>
    </>
  )
}

export default GridMain