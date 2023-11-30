import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAppStore } from '../../zustand/AppStore'

const CreatePerson = () => {
    const getSexes= useAppStore((state)=>state.getSexes)
    const getTdocs= useAppStore((state)=>state.getTdocs)
    const {register, watch, formState: {errors},handleSubmit} =useForm()
    const [sexes, setSexes]=useState([])
    const [tdocs, setTdocs]=useState([])

    const initialCharge=async()=>{
        let lsexes = await getSexes()
        if(sexes!==null){
            setSexes(lsexes)
            // console.log(sexes)
        }
        let ltdocs= await getTdocs()
        if(ltdocs!==null){
            setTdocs(ltdocs)
            console.log(tdocs)
        }
    }

    const onSubmit=()=>{
        console.log(watch())
    }

    useEffect(()=>{
        initialCharge()
    },[])

    return (
        <div className='container-fluid p-4'>
            <div className='row'>

                <div className="flex justify-start">
                    <h1 className="font-semibold">Nuevo Registro</h1>
                </div>

            </div>
            <div className='w-full '>
                
                <div className='w-full flex md:justify-center'>
                    <form className='w-full gap-2' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                        <div className='w-full justify-center md:w-1/2 my-3'>
                            <label className='text-sm relative text-gray-400'>Nombres:</label>
                            <input {...register("name",{required:true})} type="text" className="w-full bg-transparent focus:outline-none border-b-2" />
                            <span className='text-xs text-red-600'>{errors.name && 'Este campo es requerido'}</span>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <label className='text-sm relative text-gray-400'>Apellidos:</label>
                            <div className='w-full flex flex-wrap md:flex-nowrap gap-2 '>

                                <div className='w-full md:w-1/2 '>

                                    <input {...register("lastname",{required:true})} type="text" className="w-full bg-transparent focus:outline-none border-b-2" />
                                    <span className='text-xs text-red-600'>{errors.lastname && 'este campo es requerido'}</span>
                                </div>
                                <div className='w-full md:w-1/2 '>

                                    <input {...register("lastname2")} type="text" className="w-full bg-transparent focus:outline-none border-b-2" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 my-3'>
                            <label className='text-sm relative text-gray-400'>Fecha de nacimiento:</label>
                            <input {...register("birthday")} type="date" className="w-full bg-transparent focus:outline-none border-b-2" />
                        </div>
                        <div className='w-full md:w-1/2 md:flex lg:flex-nowrap items-center gap-2  my-3'>
                            <div className='w-full md:w-1/3 ' >
                                <label className='text-sm relative text-gray-400'>Sexo:</label>
                                <select {...register("sex")}  className="w-full bg-transparent focus:outline-none border-b-2" >
                                    {
                                        sexes.map((s)=>{
                                            return (<>
                                            <option key={s.id} className='bg-gray-700 px-2 '>
                                               <span className='p-2 text-center'>{s.shortName}</span>
                                            </option>
                                            </>)
                                        })
                                    }
                                </select>
                            </div>
                            <div className='w-full md:w-2/3 my-3' >
                                <label className='text-sm relative text-gray-400'>Doc. Identidad:</label>
                                <div className='w-full flex flex-wrap md:flex-nowrap gap-4'>
                                    <select {...register("typedoc",{required: true})} className="min-w-fit flex md:w-1/2 bg-transparent focus:outline-none border-b-2" >
                                    {
                                        tdocs.map((t)=>{
                                            return (<>
                                            <option key={t.id} className='bg-gray-700 px-2 '>
                                               <span className='p-2 text-center'>{t.shortname}</span>
                                            </option>
                                            </>)
                                        })
                                    }
                                    </select>
                                    <input {...register("numdoc", {required:true})} type="text" className="md:w-1/2 flex bg-transparent focus:outline-none border-b-2" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 my-3'>
                            <label className='text-sm text-gray-400'>E-mail:</label>
                            <input {...register("email")} type="email" className="w-full bg-transparent focus:outline-none border-b-2" />
                        </div>
                        <div className='w-full md:w-1/2 flex justify-end gap-5 mt-10'>
                            <button type='button'>
                                Cancelar
                            </button>
                            <button type='submit'>
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePerson