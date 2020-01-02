import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/Connection';
import Auth from '../components/Auth/Auth';
import MyNavBar from '../components/MyNavBar/MyNavBar';
import Team from '../components/Team/Team';
import playerData from '../helpers/data/playerData';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
    players: [],
  }

  componentDidMount() {
    const players = playerData.getPlayers();
    this.setState({ players });
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    console.log(this.removeListener);
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
    <div className="App">
      <MyNavBar authed={authed} />
      {
      (authed) ? (<div>You Logged In!</div>) : (<Auth />)
      }
      <Team players={this.state.players} />
    </div>
    );
  }
}

export default App;
