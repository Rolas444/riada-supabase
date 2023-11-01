import { Combobox } from '@headlessui/react'
import { event } from 'jquery'
import React, { useEffect, useState } from 'react'
import { useAppStore } from '../../zustand/AppStore'

const people = [
  'Wade Cooper',
  'Arlene McCoy',
  'Devon Webb',
  'Tom Cook',
  'Tanya Fox',
  'Hellen Schmidt',
]


const CreateUser = () => {
  const currentUser = useAppStore((state)=>state.currentUser)
  const roles = useAppStore((state)=>state.roles)
  const setRoles = useAppStore((state)=>state.setRoles)
  const persons = useAppStore((state)=>state.persons)
  const [selectedPerson, setSelectedPerson] = useState(persons[0])
  const setPersons =useAppStore((state)=>state.setPersons)
  const [query, setQuery] = useState('')


  const filteredPeople =
    query === ''
      ? persons
      : persons.filter((p) => {
        // return p.name.toLowerCase().includes(query.toLowerCase())
        return (p.name.toLowerCase().includes(query.toLowerCase()) || p.surname.toLowerCase().includes(query.toLowerCase()))
      })

  const handleSubmit = (e)=>{
    e.preventDefault();

  }



  useEffect(()=>{
    setPersons();
    setRoles(currentUser.id)
  },[])

  return (<>
    <div className='text-soft mb-3 font-bold'>Nuevo Usuario</div>

    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="person" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Persona</label>
        <Combobox name='person' value={selectedPerson} onChange={setSelectedPerson}>
          <Combobox.Input
            className="bg-gray-50 border border-gray-300 text-gray-900
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
              dark:focus:border-blue-500"
            onChange={(event) => setQuery(event.target.value)} displayValue={(person)=>person.name+' '+person.surname } autoComplete='off' />
          <Combobox.Options
            className="mt-1 max-h-60 w-[100%] overflow-auto rounded-md bg-gray-500
            py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {filteredPeople?.slice(0,5)?.map((p) => (
              <Combobox.Option
                key={p.id}
                value={p}
                className='relative cursor-pointer hover:bg-soft hover:rounded-md select-none px-2 py-2 pr-4'
              >
                {p.name+' '+p.surname}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
        
      </div>
      <div className="mb-6">
        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
        <select type="text" id="desc" className="bg-gray-50 border border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
        dark:focus:border-blue-500" placeholder='nivel de autorización' autoComplete='off' required >
          {
            roles.map((r)=>(
              <option key={r.id} value={r.id}>
                 {r.name} 
              </option>
            ))
          }
        </select>
      </div>
      <div className='mb-6'>
          <label>Password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900
         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500" placeholder="Contraseña" required  />
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