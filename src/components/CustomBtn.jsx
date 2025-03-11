import React from 'react'

function CustomBtn({title,extraClass}) {
    return (
        <button className={`rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${extraClass}`}>
            {title}
        </button>
    )
}

export default CustomBtn