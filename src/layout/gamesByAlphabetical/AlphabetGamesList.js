import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Components
import Search from '../../search/Search'
import AlphabetItem from './AlphabetItem'

const AlphabetGamesList = () => {

  const [games, setGames] = useState('')

  const call = async () => {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: { 'sort-by': 'alphabetical' },
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '042d71d5d4msh5518d2260fc0fa3p1911f3jsn49a42a5790c4'
      }
    };

    const res = await axios.request(options)
    const data = await res.data

    setGames(data)

    console.log(games)
  }

  useEffect(() => call(), [])


  const [searchText, setSearchText] = useState('')

  const sendText = (text) => { setSearchText(text) }

  return (
    <div className='container'>
      <h1 style={{
        color: 'white',

        borderRadius: '3px',
        background: '#198754'
      }} className='ani'>By Alphabet games list</h1>
      <Search sendText={sendText} />
      <div className='imageTable'>
        {searchText === '' ?
          (games ? games.map((game) => <AlphabetItem key={game.id} game={game} />) : <h1>Loading...</h1>) :
          (games.filter((game) => game.title.includes(searchText.charAt(0).toUpperCase() + searchText.slice(1))).map((game) => <AlphabetItem key={game.id} game={game} />))
        }
      </div>
    </div>
  )
}

export default AlphabetGamesList