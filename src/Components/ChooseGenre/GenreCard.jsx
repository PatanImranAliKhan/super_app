import React from 'react'

const GenreCard = ({ data, index, handleGenreOnClick }) => {
  return (
    <div className='card'
      style={{
        backgroundColor: data.backgroundColour,
        border: data.isSelected ? '5px solid ' : 'none', borderColor: data.isSelected ? '#11B800' : 'none'
      }}
      onClick={() => { handleGenreOnClick(index) }}
    >
      <p>{data.genre}</p>
      <img src={data.image} alt={data.genre} />
    </div>
  )
}

export default GenreCard