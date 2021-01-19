import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function App() {
  const [categories, setCategories] = useState([''])

  /* const handleChange = () => {
    setCategories([...categories, 'El pepe'])
  } */
  return (
    <>
      <div className="flex space-x-4">
        <h2 className="py-2 px-4 text-3xl transition duration-500 ease-in-out text-green-600 text-red-600 transform hover:-translate-y-1 hover:scale-110">GifApp</h2>
        <AddCategory setCategories={setCategories} />
      </div>
      <hr />
      <ol>
        {
          categories.map(category => (
            <GifGrid
              category={category}
              key={category}
            />
          ))
        }
      </ol>
    </>
  );
}
export default App;