const apiKey = 'Tu api key aqui'
const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=`;
const button = document.querySelector('button');
const cards = document.querySelector('.cards')
const input = document.querySelector('input')

const addMovieToDom = (movie) => {
    const cardHTML = `
        <div class="card"> 
            <img src="${movie.Poster}" alt=""
            <p id="year">${movie.Year}</p>
        </div>
    `;
    
    cards.insertAdjacentHTML('beforeend', cardHTML);
}

const movieIteration = (movies) => {
    cards.innerHTML = ""
    input.value = ""
    movies.forEach(element =>  addMovieToDom(element));
}

const fetchMovie = (searchMovie) => {
    fetch(url+searchMovie)
        .then(resp => resp.json())
        .then(({ Search }) => movieIteration(Search) );
}

button.addEventListener('click', () => fetchMovie(document.querySelector('#movie').value));
