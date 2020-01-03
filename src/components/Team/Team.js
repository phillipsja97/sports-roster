/* eslint-disable max-len */
import React from 'react';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/AuthData';
import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

class Team extends React.Component {
  state = {
    players: [],
    editMode: false,
    playerToEdit: {},
    showPlayerForm: false,
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
        this.setState({ showPlayerForm: false });
      })
      .catch((errorFromAddPin) => console.error(errorFromAddPin));
  }

  updateCurrentPlayer = (playerId, updatedInfo) => {
    playerData.updatePlayer(playerId, updatedInfo)
      .then(() => {
        this.getPlayers(authData.getUid);
        this.setState({ editMode: false, showPlayerForm: false });
      })
      .catch((errorFromUpdatePin) => console.error(errorFromUpdatePin));
  }

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  setHidePlayerForm = () => {
    this.setState({ showPlayerForm: false, editMode: false });
  }

  setEditMode = () => {
    this.setState({ editMode: true, showPlayerForm: true });
  }

  setPlayerToEdit = (player) => {
    this.setState({ playerToEdit: player });
  }


  render() {
    const { setPlayerToEdit } = this.props;
    return (
      <div>
      <button className="btn btn-primary" onClick={this.setShowPlayerForm}>Add a new player</button>
  { this.state.showPlayerForm && <PlayerForm addNewPlayer={this.addNewPlayer} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updateCurrentPlayer={this.updateCurrentPlayer} setHidePlayerForm={this.setHidePlayerForm} /> }
      <div className="d-flex flex-wrap justify-content-center" id="playersContainer">
        { this.state.players.map((player) => (<Player key={player.id} player={player} deleteSinglePlayer={this.deleteSinglePlayer} addNewPlayer={this.addNewPlayer} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit} />))}
      </div>
      </div>
    );
  }
}

export default Team;
