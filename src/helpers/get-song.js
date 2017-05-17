const GetSong = (url) => {
    const request = new Request(url, {
        headers: new Headers({
            'Authorization': `Bearer BQCJIz1rpUk_T7zgsGRSMo1q2IYoN9MSzBngE5hdUmLP7BH-ygVPOC5Eb1s-EYcl04dQx707eB8VUH5LnwUgrNuLrqOBNDT-4FVre1Y9zz3QYbbUQVD7XaQJujlzrnx0oN7915yh0lROtXSJcKFG6uxXUhjQ7Qq36jY1neskl8T7MnLde8Jqg5M583hbYQvQlWt3l4KHlO7nDZpqmqsD9Dflf0Wn7x142GNpaesox8y8hdSnvlZI2avkGpAClsO9MtlmlpKx62-ypoIBjkA18RreLO_OrItiLRaO_SzGa1pc2h60knpbETF1M_5OOb1m1cTEeg`,
        })
    })

    return fetch(request).then(res => {
        return res.json()
    })
}

export default GetSong