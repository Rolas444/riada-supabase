import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {MdOutlineViewList} from 'react-icons/md'

const columnHelper = createColumnHelper()
const handleAction = (e)=>{
    alert(`vamos a ver los de talles del elemnto ${e.original.id}`)
    // console.log(e.original.id)
}


export const ColumnPersons = [
    columnHelper.accessor('id', {
        cell: info => (<span className='max-w-min'>{info.getValue()}</span>),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('numdoc', {
        header:'doc. Iden.',
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor(
        row => `${row.name} ${row.lastname} ${row.lastname2}`,
         { id: 'fullname', header: 'nombres' }),

    columnHelper.accessor('email', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    
    columnHelper.display({
        cell: props => (<>
            <div className='flex'>
                <div className='hover:bg-gray-900 p-1 rounded-xl text-cyan-700 cursor-pointer' onClick={()=>handleAction(props.row)}>
                    <MdOutlineViewList  className=' w-6 h-6 hover:text-gray-200 '/>
                </div>
            </div>
        </>),
        id:'actions'}
    )

]

export default ColumnPersons