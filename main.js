let joke;

document.getElementById('refreshButton').addEventListener('click', generateJoke);

function generateJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
        joke = data;
        displayJoke();
        storeJoke();
    })
    .catch(error => console.error('Error:', error));
}

function displayJoke() {
    document.getElementById('jokeContainer').innerHTML = joke.setup + ' ' + joke.punchline;
}

function storeJoke() {
    chrome.storage.sync.set({jokeSchema: joke}, function() {
        console.log('Joke is stored in Chrome storage.');
    });
}