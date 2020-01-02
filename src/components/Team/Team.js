import React from 'react';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/AuthData';

class Team extends React.Component {
  getPlayers = () => {
    playerData.getPlayers(authData.getUid())
      .then((players) => {
        this.setState({ players });
        console.log('hi', players);
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getPlayers();
  }

  render() {
    return (
      <div>
        <button className="btn btn-danger">Hi</button>
      </div>
    );
  }
}

export default Team;
