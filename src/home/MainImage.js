import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MainImage = () => {

  const [ranPic, setRanPic] = useState('')

  const call = async () => {

    let rN = Math.floor(Math.random() * 200)
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: { id: `${rN}` },
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '042d71d5d4msh5518d2260fc0fa3p1911f3jsn49a42a5790c4'
      }
    };

    const res = await axios.request(options)
    const data = await res.data


    console.log(data.thumbnail)
    setRanPic(data.thumbnail)
  }

  useEffect(() => call(), [])

  useEffect(() => {
    const interval = setInterval(() => {

      call();

    }, 7000);

    return () => clearInterval(interval);
  }, []);



  const imagestyle = {
    // backgroundImage: `url('${ranPic}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top ',
    paddingTop: '1rem',
    borderRadius: '5px'
  }
  return (
    <div className='container ani'>
      <a href="https://www.freetogame.com/" target='_blank'>
        <img src={ranPic} alt="" style={imagestyle} />
      </a>
    </div>
  )
}

export default MainImage