const GetSong = (access) => {
    const request = new Request('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: new Headers({
            'Authorization': `${access.token_type} ${access.access_token}`,
        })
    })

    return fetch(request).then(res => {
        return res.json()
    })
}

export default GetSong