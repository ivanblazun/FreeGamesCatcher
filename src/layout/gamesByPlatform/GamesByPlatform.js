import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import Search from '../../search/Search'
import PlatformItem from './PlatformItem'

const GamesByCategory = () => {

  const [games, setGames] = useState(null)

  const [searchText, setSearchText] = useState('')

  const [platform, setPlatform] = useState('')



  const call = async () => {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: { platform: `${platform}` },
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '042d71d5d4msh5518d2260fc0fa3p1911f3jsn49a42a5790c4'
      }
    };

    const res = await axios.request(options)
    const data = await res.data

    setGames(data)
    console.log(data)
  }

  useEffect(() => call(), [platform])

  const sendText = (text) => { setSearchText(text) }

  return (
    <div className='container'>
      <h1 className='ani'
        style={{
          color: 'white',

          borderRadius: '3px',
          background: '#212529'
        }}
      >GamesByCategory</h1>
      <div>

        <select name="category"
          className='text-center form-select-sm form-select ani'
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="Choose...">Choose category...</option>
          <option value="pc">Pc</option>
          <option value="browser">Browser</option>

        </select>
      </div>
      <Search sendText={sendText} />
      <div className='imageTable'>
        {searchText === '' ?
          (games ? games.map((game) => <PlatformItem key={game.id} game={game} />) : <h1>Loading...</h1>) :
          (games.filter((game) => game.title.includes(searchText.charAt(0).toUpperCase() + searchText.slice(1))).map((game) => <PlatformItem key={game.id} game={game} />))
        }
      </div>
    </div>
  )
}

export default GamesByCategory