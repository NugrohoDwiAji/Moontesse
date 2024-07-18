import React from 'react'

const Button = ({type="button", children, text, className="text-white bg-Secondary hover:scale-105 w-fit cursor-pointer hover:shadow-xl py-1 px-4 rounded-md shadow-md "}) => {
  return (
    <button className={className}>
        {text || children}
    </button>
  )
}

export default Button