// ToDo, implement Authorization workflow https://developer.spotify.com/wp-content/uploads/2014/04/Authorization-Code-Flow-Diagram.png
const GenerateToken = (clientId, clientSecret) => {

    const authUrl = 'https://accounts.spotify.com/api/token'
    const base64 = btoa(`${clientId}:${clientSecret}`)
    
    const request = new Request(authUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Basic ${base64}`,

        }),
        body: 'grant_type=client_credentials'
    })

    return fetch(request).then(res => {
       return res.json()
    })
    
}

export default GenerateToken