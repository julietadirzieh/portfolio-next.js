import React from 'react'

const Course = ({ name, institution, year }) => {

    return (
        <li className='my-4 text-center md:text-left'>
            <h2 className='font-bold text-xl'>{name}</h2>
            <div className='flex justify-center md:justify-start'>
                <p className='text-base mr-1'>{year} |</p>
                <p className='text-base ml-1'> {institution}</p>
            </div>
        </li>
    )
}

export default Course;