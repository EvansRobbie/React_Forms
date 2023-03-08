import React, { useState } from 'react'


const Form = () => {
    const [formvalue, setFormValue] = useState({
        name:'',
        email:'',
        password:''
    })
    const [error, setError] = useState('')

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormValue({...formvalue, [name]: value})


    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        //  perform validations
        const error = {}
        if (!formvalue.name.trim()){
            error.name = 'Name is required'
        }
        if (!formvalue.email.trim()){
            error.email = 'Email is required'
        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formvalue.email)){
            error.email = 'Invalid Email'
        }
       
        if (!formvalue.password.trim()){
            error.password = 'Password is required'
        }else if(formvalue.password.length < 6){
            error.password = 'password should contain more than six characters'
        }
        if (Object.keys(error).length > 0){
            setError(error)
            return
        }

        
        console.log('Submiting form:', formvalue)
        setFormValue({
            name:'',
            email:'',
            password:''
        })
    }
  return (
    <div className=' bg-slate-900 h-screen w-full my-0 flex '>
        <div className=' w-11/12 md:w-[30%] mx-20 my-10 md:m-auto h-[85vh] rounded-xl flex justify-center  bg-slate-200'>
            <form onSubmit={handleSubmit} className=' flex flex-col items-center w-full h-full my-6'>
                <div className='flex flex-col items-start w-full px-5 py-2 gap-1 '>
                <label htmlFor="name"  className='tetx-slate-900 text-lg font-medium'>Name</label>
                <input 
                    onChange={handleChange}
                    value={formvalue.name}
                    type="text" 
                    id='name'
                    name='name'
                    placeholder='Username' 
                    className='w-full outline-none px-2 py-1 placeholder-slate-500 focus:bg-teal-500 rounded-full '
                    />
                    {/* {error && <span>{error}</span>} */}
                    {error.name && <span className='text-red-500 text-center'>{error.name}</span>}
                </div>
                <div className='flex flex-col items-start w-full px-5 py-2 gap-1'>
                    
                    <label htmlFor="email" className='text-slate-900 text-lg font-medium'>Email</label>
                        <input 
                        onChange={handleChange}
                        value={formvalue.email}
                        type="email" 
                        id='email'
                        name='email'
                        placeholder='Email' 
                        className='w-full outline-none rounded-full text-base px-2 py-1 placeholder-slate-500 focus:bg-teal-500'
                        />
                        {error.email && <span className='text-red-500 text-center'>{error.email}</span>}
                </div>
                <div className='flex flex-col items-start w-full px-5 py-2 gap-1'>
                    
                <label htmlFor="password" className='text-slate-900 text-lg font-medium'>Password</label>
                    <input 
                    onChange={handleChange}
                    value={formvalue.password}
                    type="password" 
                    id='password'
                    name='password'
                    placeholder='Password' 
                    className='w-full outline-none rounded-full text-base px-2 py-1 focus:bg-teal-500 placeholder-slate-500'
                    />
                    {error.password && <span className='text-red-500 text-center'>{error.password}</span>}
                </div>
                <button type='submit' className=' w-[20vw] text-slate-200 my-4 bg-slate-900 rounded-lg py-1  active:scale-105 shadow-lg hover:shadow-teal-500 duration-300  ease-in hover:translate-x-5'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form