const apiKey = '3D6rMW0e6GHURpRDBVNAnjwujtNx2TYc';
const gifUrl = 'api.giphy.com/v1/gifs/search';

//still need to add the add some ids in and divs in index.html to link this
// const getGif = () =>{
//     fetch(`${gifUrl}${apiKey}`)
//     .then(res => res.json())
//     .then(json => {
//         json.data.map(gif => gif.images.fixed_height.url)
//         .forEach(url => {
//             let img = document.createElement('img')
//             img.src = url
//             document.body.appendChild(img)
//         })
//     })
//     .catch(error => document.body.appendChild = error)
// }

let gif = document.querySelector('date');

function getGif() {
    gif.innerHTML = '';
    let gifSearch = document.getElementById('gifSearh').value.trim();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${str}`;
    fetch(url)
        .then(resp => resp.json())
        .then(json => {
            let img = document.createElement('img');
            img.src = json.data[0].images.fixed_height_downsampled.url;
            img.style.cursor = 'pointer';
            results.appendChild(img);
            gifSearch.value = '';
        })
        .catch(err => {
            console.error(err);
        });
}

module.exports = { fetchGiphy };



document.getElementById('giphy').addEventListener('click', getGif);


module.exports = getGif;