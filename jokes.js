//Készítette: Farkas Benedek, Rózsa Richárd, Tóthmihály Martin
let joke;
let jokeButton = document.getElementById('jokeBtn');
let newJokeButton = document.getElementById('newJokeBtn');
let jokeAnswer = document.getElementById('answer');
let jokeText = document.getElementById('joke');

jokeAnswer.style.display = 'none';
document.addEventListener('DOMContentLoaded', () => {
  fetchJoke();

  jokeButton.addEventListener('click', () => {
    jokeAnswer.innerHTML = joke.punchline;
    jokeAnswer.style.display = 'block';
  });

  newJokeButton.addEventListener('click', () => {
    jokeAnswer.style.display = 'none';
    fetchJoke();
  });
});

function fetchJoke() {
  fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response => response.json())
    .then(data => {
      joke = data;
      joke.innerHTML = "";
      jokeText.innerHTML = joke.setup;
    })
    .catch(error => console.error('Error fetching the joke:', error));
}
