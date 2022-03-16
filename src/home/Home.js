import React, { useState, useEffect } from 'react'
import axios from 'axios';

// Components
import MainRender from './MainRender';
import MainImage from './MainImage';
import Buttons from './Buttons';

const Home = () => {

  const rN = Math.floor(Math.random() * 200)

  const [current, setCurrent] = useState(0)

  const curr = (par) => { setCurrent(par) }

  const imagestyle = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top ',
    paddingTop: '1rem',
    borderRadius: '5px'
  }

  return (
    <div className="container">
      <MainImage />
      <div >
        <Buttons curr={curr} />
      </div>
      <MainRender current={current} />
    </div>
  )
}

export default Home