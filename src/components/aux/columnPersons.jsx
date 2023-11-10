import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

const columnHelper = createColumnHelper()



export const ColumnPersons = [
    columnHelper.accessor('id', {
        cell: info => (<span className='max-w-min'>{info.getValue()}</span>),
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row=>`${row.name} ${row.lastname} ${row.lastname2}`,{id:'fullname', header: 'nombres'}),
    // columnHelper.accessor('lastname', {
    //     cell: info => info.getValue(),
    //     footer: info => info.column.id,
    // }),
    // columnHelper.accessor('lastname2', {
    //     cell: info => info.getValue(),
    //     footer: info => info.column.id,
    // }),
    columnHelper.accessor('email', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('numdoc', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),

]

export default ColumnPersons