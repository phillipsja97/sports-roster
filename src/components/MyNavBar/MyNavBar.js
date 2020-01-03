import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import './MyNavBar.scss';

class MyNavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <span className="navbar-brand" href="#">
          <img className="nav-logo" src="https://vignette.wikia.nocookie.net/hockeymovies/images/d/d0/Chiefs_logo.png/revision/latest/scale-to-width-down/340?cb=20130611235924" alt="Chiefs"/>
        </span>
        <span className="navbar-brand nav-text" href="#">Charlestown Chiefs Roster</span>
        <button className="navbar-toggler" type="button"
          data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>
          <div className="form-inline my-2 my-lg-0">
            { authed && <button className="nav-link btn btn-danger" onClick={this.logMeOut}>Logout</button> }
          </div>
        </div>
      </nav>
    );
  }
}

export default MyNavBar;
