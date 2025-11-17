const getData = (str) => {
    return fetch(
        `https://test-b80a9-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
    )
        .then(response => response.json())
    // .then(json => console.log(json))
}

export default getData