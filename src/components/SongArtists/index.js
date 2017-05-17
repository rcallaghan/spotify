import React from 'react'

const SongArtists = ({artists}) => {
    
    const artist = artists.map(item => {
        return item.name
    })

    return <span>{artist}</span>
}

export default SongArtists