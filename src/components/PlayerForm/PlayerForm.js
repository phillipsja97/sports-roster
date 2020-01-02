import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/AuthData';


class PlayerForm extends React.Component {
  static propTypes = {
    addNewPlayer: PropTypes.func,
  }

  state = {
    playerName: '',
    playerImageUrl: '',
    playerPosition: '',
  }

  savePlayerEvent = (e) => {
    const { addNewPlayer } = this.props;
    e.preventDefault();
    const newPlayer = {
      name: this.state.playerName,
      imageUrl: this.state.playerImageUrl,
      position: this.state.playerPosition,
      uid: authData.getUid(),
    };
    // actually save the object
    addNewPlayer(newPlayer);
  }

  playerNameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  playerImageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  }

  playerPositionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  render() {
    return (
      <div>
      <button className="btn btn-primary">Add a New Player</button>
      <form className='col-6 offset-3 PlayerForm'>
      <div className="form-group">
        <label htmlFor="player-name">Player Name:</label>
        <input
          type="text"
          className="form-control"
          id="player-name"
          placeholder="Enter Player name"
          value={this.state.playerName}
          onChange={this.playerNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="player-image-url">Player Image Url:</label>
        <input
          type="text"
          className="form-control"
          id="player-image-url"
          placeholder="Enter photo URL"
          value={this.state.playerImageUrl}
          onChange={this.playerImageChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="player-position">Player Position:</label>
        <input
          type="text"
          className="form-control"
          id="player-position"
          placeholder="Enter players position"
          value={this.state.playerPosition}
          onChange={this.playerPositionChange}
        />
      </div>
      <button className="btn btn-secondary" onClick={this.savePlayerEvent}>Save Player</button>
    </form>
      </div>
    );
  }
}

export default PlayerForm;
