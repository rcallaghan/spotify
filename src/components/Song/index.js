import React from 'react'
import ExternalLink from '../ExternalLink'
import SongHeader from '../SongHeader'
import SongImage from '../SongImage'

const Song = (props) => {
    const data = props.data
    return (
        <div>
            <SongHeader title={data.name} artists={data.artists} />
            <ExternalLink link={data.external_urls.spotify} text="Listen to Song" />
            <ExternalLink link={data.album.external_urls.spotify} text="Listen to Album" />
            <ExternalLink link={data.album.uri} text="Open in Spotify" primary />
            <SongImage image={data.album.images[0].url} />
        </div>
    )
}

export default Song