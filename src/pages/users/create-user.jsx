import { Combobox } from '@headlessui/react'
import { event } from 'jquery'
import React, { useState } from 'react'

const people = [
  'Wade Cooper',
  'Arlene McCoy',
  'Devon Webb',
  'Tom Cook',
  'Tanya Fox',
  'Hellen Schmidt',
]


const CreateUser = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')


  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase())
      })

  return (<>
    <div className='text-soft mb-3 font-bold'>Nuevo Usuario</div>

    <form>
      <div className="mb-6">
        <label htmlFor="person" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Persona</label>
        <Combobox name='person' value={selectedPerson} onChange={setSelectedPerson}>
          <Combobox.Input
            className="bg-gray-50 border border-gray-300 text-gray-900
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
              dark:focus:border-blue-500"
            onChange={(event) => setQuery(event.target.value)} />
          <Combobox.Options
            className="mt-1 max-h-60 w-[100%] overflow-auto rounded-md bg-gray-500
            py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {filteredPeople.slice(0,4).map((person) => (
              <Combobox.Option
                key={person}
                value={person}
                className='relative cursor-pointer hover:bg-soft hover:rounded-md select-none px-2 py-2 pr-4'
              >
                {person}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
        {/* <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900
         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500" placeholder="ministerio de ..." required autoComplete='off' /> */}
      </div>
      <div className="mb-6">
        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
        <Select type="text" id="desc" className="bg-gray-50 border border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
        dark:focus:border-blue-500" placeholder='¿Qué hace el ministerio?' autoComplete='off' required >
          <option>
            USER
          </option>
          <option>
            CAJA
          </option>
        </Select>
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

export default CreateUser