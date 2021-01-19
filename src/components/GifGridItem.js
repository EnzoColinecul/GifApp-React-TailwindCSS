import React from 'react'

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="shadow-xl text-gray-600 bg-white  rounded-lg mb-4 mr-6 ">
      <img className="max-w-sm max-h-64" src={url} alt={title} />
      <p className="text-center">{title}</p>
    </div>
  )
}

export default GifGridItem
