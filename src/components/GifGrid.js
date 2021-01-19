import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)

  return (
    <>
      <h3 className="text-3xl font-bold uppercase text-green-600 text-center">{category}</h3>
      {loading &&
        <div className="animate-pulse font-sans text-center text-2xl transition ease-out duration-150 text-green-300 mt-16">
          Cargando
        </div>}
      <div className="overflow-hidden mx-auto flex flex-row	flex-wrap animate-fadeIn content-center items-center justify-center">
        {
          images.map(info => (
            <GifGridItem
              key={info.id}
              {...info}
            />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid
