import React from 'react'
// Components
import GamesList from '../layout/gameslist/GamesList';
import AlphabetGamesList from '../layout/gamesByAlphabetical/AlphabetGamesList';
import GamesByPlatform from '../layout/gamesByPlatform/GamesByPlatform';
import GamesByCategory from '../layout/gamesByCategory/GamesByCategory';

const MainRender = (props) => {

  switch (props.current) {
    case 1:
      return (
        <div>
          <GamesList />
        </div>
      )
    case 2:
      return (
        <div>
          <AlphabetGamesList />
        </div>
      )
    case 3:
      return (
        <div>
          <GamesByCategory />
        </div>
      )
    case 4:
      return (
        <div>
          <GamesByPlatform />
        </div>
      )
    default:
      return (

        <h1>ahhh</h1>
      )
  }
}
export default MainRender