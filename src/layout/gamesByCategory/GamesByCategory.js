import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import Search from '../../search/Search'
import CategoryItem from './CategoryItem'


const GamesByCategory = () => {

  const [games, setGames] = useState(null)

  const [searchText, setSearchText] = useState('')

  const [category, setCategory] = useState('')



  const call = async () => {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: { category: `${category}` },
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

  useEffect(() => call(), [category])

  const sendText = (text) => { setSearchText(text) }

  return (
    <div className='container'>
      <h1 className='ani'
        style={{
          color: 'white',

          borderRadius: '3px',
          background: ' #dc3545'
        }}
      >GamesByCategory</h1>
      <div>

        <select name="category"
          className='text-center form-select-sm form-select ani'
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Choose...">Choose category...</option>
          <option value="mmorpg">Mmorpg</option>
          <option value="shooter">Shooter</option>
          <option value="strategy">Strategy</option>
          <option value="racing">Racing</option>
          <option value="sandbox">Sandbox</option>
          <option value="turn-based">Turn-based</option>
          <option value="card">Card</option>
          <option value="fighting">Fighting</option>
          <option value="action">Action</option>
          <option value="flight">Flight</option>
          <option value="battle-royale">Battle-royale</option>
          <option value="tower-defense">Tower-defense</option>
          <option value="horror">Horror</option>
          <option value="side-scroller">Side-scroller</option>
        </select>
      </div>
      <Search sendText={sendText} />
      <div className='imageTable'>
        {searchText === '' ?
          (games ? games.map((game) => <CategoryItem key={game.id} game={game} />) : <h1>Loading...</h1>) :
          (games.filter((game) => game.title.includes(searchText.charAt(0).toUpperCase() + searchText.slice(1))).map((game) => <CategoryItem key={game.id} game={game} />))
        }
      </div>
    </div>
  )
}

export default GamesByCategory