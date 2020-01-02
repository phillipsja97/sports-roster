import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';
import './Player.scss';


class Player extends React.Component {
  static propTypes = {
    board: playerShape.playerShape,
    deleteSinglePlayer: PropTypes.func,
  }

  deleteSinglePlayerEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePlayer, player } = this.props;
    deleteSinglePlayer(player.id);
  }

  render() {
    const { player } = this.props;
    return (
       <div className="player col-4">
         <div className="card">
           <div className="card-body">
             <h5 className="card-title text-center">{player.name}</h5>
             <p className="card-text text-center">{player.position}</p>
             <img src={player.imageUrl} alt={player.name} id="playerPhoto"/>
           </div>
           <div className="d-inline-flex justify-content-center" id="cardButtons">
           <button className="btn btn-outline-warning" id="updatePlayerButton">Update Player Info</button>
           <button className="btn btn-outline-danger" onClick={this.deleteSinglePlayerEvent} id="deletePlayerButton">Delete Player</button>
           </div>
        </div>
      </div>
    );
  }
}

export default Player;
