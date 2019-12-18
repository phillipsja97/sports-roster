import React from 'react';
import logo from './logo.svg';
import Auth from '../components/Auth/Auth';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Auth />
      <button className="btn btn-danger">Hi</button>
    </div>
  );
}

export default App;
