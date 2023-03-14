import React from 'react'

const TextError = ({children}) => {
  return (
    <div className='text-red-500 text-center flex  justify-center w-full'>
        {children}
    </div>
  )
}

export default TextError