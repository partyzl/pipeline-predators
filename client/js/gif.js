const apiKey;
const gifUrl;

//still need to add the add some ids in and divs in index.html to link this
const getGif = () =>{
    fetch(`${gifUrl}${apiKey}`)
    .then(res => res.json())
    .then(json => {
        json.data.map(gif => gif.images.fixed_height.url)
        .forEach(url => {
            let img = document.createElement('img')
            img.src = url
            document.body.appendChild(img)
        })
    })
    .catch(error => document.body.appendChild = error)
}

module.exports = getGif;