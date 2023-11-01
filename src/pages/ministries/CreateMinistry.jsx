import React from 'react'

const CreateMinistry = () => {
  return (<>
    <div className='text-soft mb-3 font-bold'>Nuevo Ministerio</div>

    <form>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900
         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500" placeholder="ministerio de ..." required autoComplete='off'/>
      </div>
      <div className="mb-6">
        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
        <input type="text" id="desc" className="bg-gray-50 border border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
        dark:focus:border-blue-500" placeholder='¿Qué hace el ministerio?' autoComplete='off' required />
      </div>
      <div className='flex justify-end'>
        <button type="submit" className="text-invert font-bold bg-menu hover:bg-soft focus:ring-4 focus:outline-none
       focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
       dark:bg-soft  dark:hover:bg-menu dark:hover:text-white dark:focus:ring-primary">Crear</button>
      </div>

    </form>
  </>


  )
}

export default CreateMinistry