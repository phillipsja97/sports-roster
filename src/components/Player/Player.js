import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';
import './Player.scss';


class Player extends React.Component {
  static propTypes = {
    board: playerShape.playerShape,
    deleteSinglePlayer: PropTypes.func,
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
  }

  deleteSinglePlayerEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePlayer, player } = this.props;
    deleteSinglePlayer(player.id);
  }

  setEditModeEvent = (e) => {
    e.preventDefault();
    const { setEditMode, setPlayerToEdit, player } = this.props;
    setEditMode(true);
    setPlayerToEdit(player);
  }

  render() {
    const { player } = this.props;
    return (
       <div className="player col-4">
         <div className="card" id="playerCard">
           <div className="d-flex justify-content-end closeOut">
         <button className="btn btn-danger" onClick={this.deleteSinglePlayerEvent}>X</button>
         </div>
           <div className="card-body">
             <h5 className="card-title text-center">{player.name}</h5>
             <p className="card-text text-center">{player.position}</p>
             <img src={player.imageUrl} alt={player.name} id="playerPhoto"/>
           </div>
           <div className="d-inline-flex justify-content-center" id="cardButtons">
           <button className="btn btn-warning" onClick={this.setEditModeEvent} id="updatePlayerButton">Update Player Info</button>
           </div>
        </div>
      </div>
    );
  }
}

export default Player;
