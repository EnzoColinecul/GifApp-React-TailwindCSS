import React, { useState } from 'react'
import PropTypes from 'prop-types'
import searchIcon from '../../public/search.svg?'

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex group">
        <input
          placeholder="Buscar..."
          className="font-semibold rounded-md border-2 pl-5 mb-4 mt-2 w-4/5 md:w-40 lg:max-w-lg  border-transparent"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <img
          className="group-hover:animate-bounceEdit -ml-28  md:-ml-40 w-4 mb-2"
          src={searchIcon}
          alt="searchIcon"
        />
      </div>
    </form>
  )

}
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory
