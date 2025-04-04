import { useRouter } from 'next/navigation'
import React from 'react'

function ClientBtn({link,className,title}) {

    const router= useRouter();

    const handleClick= ()=>{
        router.forward(link)
    }
  return (
    <button className={`w-full rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-600 hover:scale-105 ${className}`} onClick={handleClick}>
    {title}
  </button>
  )
}

export default ClientBtn