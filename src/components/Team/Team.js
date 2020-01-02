import React from 'react';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/AuthData';
import Player from '../Player/Player';

class Team extends React.Component {
  state = {
    players: [],
  }

  getPlayers = () => {
    playerData.getPlayers(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getPlayers();
  }

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center" id="playersContainer">
        { this.state.players.map((player) => (<Player key={player.id} player={player} />))}
      </div>
    );
  }
}

export default Team;
