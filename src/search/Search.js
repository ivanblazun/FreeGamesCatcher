import React, { useState } from 'react'
import axios from 'axios'

const Search = (props) => {
  const [text, setText] = useState('')

  const textInput = (e) => { setText(e.target.value) }

  props.sendText(text)

  return (
    <form action="" className='ani'>
      <div className="input-group" style={{ padding: '1rem' }}>
        <input type="search"
          className="form-control rounded"
          placeholder="Search for free games"
          onChange={textInput}
        />
      </div>
    </form>
  )
}

export default Search