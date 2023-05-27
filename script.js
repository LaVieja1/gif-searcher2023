const img = document.querySelector('img');
const searchBox = document.querySelector('#search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', searchGif);

/*
function searchGif() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=33Ny2IXp2gAZ8HSlJNhMX5dQS9BIB77p&s=${searchBox.value}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
        .catch((function() {
            img.src = 'error.jpg';
        }))
};
*/

async function searchGif() {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=33Ny2IXp2gAZ8HSlJNhMX5dQS9BIB77p&s=${searchBox.value}`, {mode: 'cors'})
        const gifData = await response.json();
        img.src = gifData.data.images.original.url;
    } catch (error) {
        img.src = 'error.jpg';
    }
}