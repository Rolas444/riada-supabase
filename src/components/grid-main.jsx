import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ImSpinner2 } from 'react-icons/im'


const GridMain = ({ data, columns }) => {
  if (data === null) return (<>
    <div className="w-full h-screen flex justify-center items-center">
      <ImSpinner2 className="w-8 h-8 animate-spin text-blue-600" />
    </div>
  </>)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <>
      <div className='w-full  mt-5'>
        <table className='w-full table-auto border-collapse border border-slate-400'>
          <thead className='w-full'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className='flex'>
                {headerGroup.headers.map(header => (
                  <th key={header.id}className='w-full' >
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
              <tr key={row.id} className='flex' >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className='w-full'>
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