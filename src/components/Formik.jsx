import React from 'react'
import { useFormik } from 'formik'
const initialValues = {
    names: '',
    emails:'',
    passwords:'',
}
const onSubmit = values =>{
    console.log(values)

}
const validate = values =>{
    const error = {}
    if(!values.names){
        error.names = 'Required'
    }
    if(!values.emails){
        error.emails = 'Required'
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emails)){
        error.emails = 'Invalid Email'
    }
    if(!values.passwords){
        error.passwords = 'Required'
    }
return error
}
const Formik = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    }
    )
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(formik.values);
    //   };
  return (
    <div>
        <div className=' bg-slate-900 h-screen w-full my-0 flex '>
        <div className=' w-11/12 md:w-[30%] mx-20 my-10 md:m-auto h-[85vh] rounded-xl flex justify-center  bg-slate-200'>
            <form
             onSubmit={formik.handleSubmit} 
             className=' flex flex-col items-center w-full h-full my-6'>
                <div className='flex flex-col items-start w-full px-5 py-2 gap-1 '>
                <label htmlFor="names"  className='text-slate-900 text-lg font-medium'>Name</label>
                <input 
                    onChange={formik.handleChange}
                    value={formik.values.names}
                    onBlur ={formik.handleBlur}
                    type="text" 
                    id='names'
                    name='names'
                    placeholder='Username' 
                    className='w-full outline-none px-2 py-1 placeholder-slate-500 focus:bg-teal-500 rounded-full '
                    />
                    {/* {error && <span>{error}</span>} */}
                    {formik.touched.names && formik.errors.names ?  <span className='text-red-500 text-center flex  justify-center w-full'>{formik.errors.names}</span>: null}
                </div>
                <div className='flex flex-col items-start w-full px-5 py-2 gap-1'>
                    
                    <label htmlFor="emails" className='text-slate-900 text-lg font-medium'>Email</label>
                        <input 
                        onChange={formik.handleChange}
                        value={formik.values.emails}
                        onBlur ={formik.handleBlur}
                        id='emails'
                        name='emails'
                        placeholder='Email' 
                        className='w-full outline-none rounded-full text-base px-2 py-1 placeholder-slate-500 focus:bg-teal-500'
                        />
                        {formik.touched.emails && formik.errors.emails ?  <span className='text-red-500 text-center flex  justify-center w-full'>{formik.errors.emails}</span> : null}
                </div>
                <div className='flex flex-col items-start w-full px-5 py-2 gap-1'>
                    
                <label htmlFor="passwords" className='text-slate-900 text-lg font-medium'>Password</label>
                    <input 
                    onChange={formik.handleChange}
                    value={formik.values.passwords}
                    onBlur ={formik.handleBlur}
                    type="password" 
                    id='passwords'
                    name='passwords'
                    placeholder='Password' 
                    className='w-full outline-none rounded-full text-base px-2 py-1 focus:bg-teal-500 placeholder-slate-500'
                    />
                    {formik.touched.passwords && formik.errors.passwords ? <span className='text-red-500 text-center flex  justify-center w-full'>{formik.errors.passwords}</span>: null}
                </div>
                <button type='submit' className=' w-[20vw] text-slate-200 my-4 bg-slate-900 rounded-lg py-1  active:scale-105 shadow-lg hover:shadow-teal-500 duration-300  ease-in hover:translate-x-5'>Submit</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Formik