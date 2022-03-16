import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Components
import GameItem from './GameItem'
import Search from '../../search/Search'


const GamesList = () => {

  const [games, setGames] = useState('')

  const call = async () => {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '042d71d5d4msh5518d2260fc0fa3p1911f3jsn49a42a5790c4'
      }
    };

    const res = await axios.request(options)
    const data = await res.data

    setGames(data)
  }

  useEffect(() => call(), [])

  const [searchText, setSearchText] = useState('')

  const sendText = (text) => { setSearchText(text) }

  return (
    <div className='container'>
      <h1
        style={{
          color: 'white',

          borderRadius: '3px',
          background: '#0dcaf0'
        }}
        className='ani'>All games list</h1>
      <Search sendText={sendText} />
      <div className="imageTable">
        {searchText === '' ?
          (games ? games.map((game) => <GameItem key={game.id} game={game} />) : <h1>Loading...</h1>) :
          (games.filter((game) => game.title.includes(searchText.charAt(0).toUpperCase() + searchText.slice(1))).map((game) => <GameItem key={game.id} game={game} />))
        }

      </div>
    </div>
  )
}

export default GamesList