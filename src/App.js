import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GetSong from './helpers/get-song'
import Song from './components/Song'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      access: null,
      song: {}
    }
  }

  componentWillMount() {
    GetSong('https://api.spotify.com/v1/me/player/currently-playing').then(payload => {
      this.setState({
        song: payload
      })
    })
  }

  render() {
    const song = this.state.song.item
    return (
      <div className="App">
        { song && <Song data={song} /> }
      </div>
    );
  }
}

export default App;
