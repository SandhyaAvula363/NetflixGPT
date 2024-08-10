import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-5xl font-bold'> {title} </h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
        <div className='my-3 md:my-0'> 
            <button className='bg-white text-black py-2 md:py-4 px-6 md:px-12 text-xl rounded-lg hover:bg-opacity-80'>
              <FontAwesomeIcon icon={faPlay} className='w-5 h-5' />
              <span>Play</span>
            </button>
            <button className='hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2'>
            <FontAwesomeIcon icon={faInfoCircle} className='w-5 h-5 px-2' /><span>More Info</span></button>
        </div>
    </div>
  )
}

export default VideoTitle;