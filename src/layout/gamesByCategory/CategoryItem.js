import React from 'react'

const CategoryItem = (props) => {
  const { title, thumbnail, freetogame_profile_url } = props.game

  return (
    <div className='item' style={{
      backgroundImage: `url('${thumbnail}')`
    }}>
      <br />
      <br />
      <br />
      <a href={freetogame_profile_url}
        style={{ textDecoration: 'none' }}
      >
        <h5 style={{
          color: ' #037ffc',
          background: 'white',
          borderRadius: '3px',

        }}>
          {title}
        </h5>
      </a>
    </div>
  )
}

export default CategoryItem