import React, { useState } from 'react'

const Buttons = (props) => {
  const [current, setCurrent] = useState('')

  props.curr(current)

  return (
    <div>
      <div className='imageTable2' >
        <button className='btn btn-info tilt'
          onClick={() => setCurrent(1)}
        >
          All games list
        </button>
        <button className='btn btn-success tilt'
          onClick={() => setCurrent(2)}
        >
          By Alphabet list
        </button>
        <button className='btn btn-danger tilt'
          onClick={() => setCurrent(3)}
        >
          By Category list
        </button>
        <button className='btn btn-dark tilt'
          onClick={() => setCurrent(4)}
        >
          By Platform List
        </button>
      </div>
    </div>
  )
}

export default Buttons