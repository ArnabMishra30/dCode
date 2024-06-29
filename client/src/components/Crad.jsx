import React from 'react'

function Crad({ name, role, branch, imageUrl }) {
    return (
        <div>
            <div className="max-w-xs shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
                <div className="flex justify-center">
                    <img className="w-32 h-32 object-cover object-center rounded-full hover:bg-primary" src={imageUrl} alt={name} />
                </div>
                <div className="px-6 py-4 text-center">
                    <div className="text-gray-100 font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-400 text-base">{branch}</p>
                    <div className="mt-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{role}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crad