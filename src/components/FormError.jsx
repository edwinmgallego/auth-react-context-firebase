import React from 'react'

const FormError = ({error}) => {
    console.log(error)
  return (
    <>
    {
   
    error &&(
        <p className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'>
        <span className='font-medium'>OOPs!</span>
            {error.message}
            
        </p>
    )
   
  }</>
  )
}

export default FormError