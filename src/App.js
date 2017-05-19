import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenerateToken from './helpers/generate-token'
import GetSong from './helpers/get-song'

import Song from './components/Song'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      song: {}
    }
  }

  componentWillMount() {
    const access = GenerateToken('0537c09a962644f5805dcb237369e690', '4662816257394ae1a2a852d522e1566e').then(payload => {
      return payload
    })

    GetSong(access).then(payload => {
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
