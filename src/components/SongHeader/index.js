import React from 'react'
import SongTitle from '../SongTitle'
import SongArtists from '../SongArtists'

const SongHeader = ({title, artists}) => {
  return (
    <div>
        <p><b>I am currently listening to,</b> <SongTitle title={title} /> by <SongArtists artists={artists} /> </p>
    </div>
  )
}

export default SongHeader