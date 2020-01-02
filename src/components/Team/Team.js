/* eslint-disable max-len */
import React from 'react';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/AuthData';
import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

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

  deleteSinglePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then((players) => {
        this.getPlayers(authData.getUid());
      })
      .catch((errorFromDeletePin) => console.error({ errorFromDeletePin }));
  }

  addNewPlayer = (newPlayer) => {
    playerData.addPlayer(newPlayer)
      .then(() => {
        this.getPlayers(authData.getUid());
      })
      .catch((errorFromAddPin) => console.error(errorFromAddPin));
  }


  render() {
    return (
      <div>
      <PlayerForm addNewPlayer={this.addNewPlayer} />
      <div className="d-flex flex-wrap justify-content-center" id="playersContainer">
        { this.state.players.map((player) => (<Player key={player.id} player={player} deleteSinglePlayer={this.deleteSinglePlayer} addNewPlayer={this.addNewPlayer} />))}
      </div>
      </div>
    );
  }
}

export default Team;
