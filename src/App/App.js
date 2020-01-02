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
    selectedPlayerId: null,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const players = playerData.getPlayers();
        this.setState({ players });
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

  renderView = () => {
    const { authed } = this.state;

    if (!authed) {
      return (< Auth />);
    }
    return (< Team />);
  }

  render() {
    const { authed } = this.state;
    return (
    <div className="App">
      <MyNavBar authed={authed} />
      {
     this.renderView()
      }
    </div>
    );
  }
}

export default App;
