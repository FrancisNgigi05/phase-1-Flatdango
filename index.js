const filmId = getFilmId();
function getFilmId() {

    const urlParams = new URLSearchParams(window.location.search);

    let filmId = urlParams.get("id");
    if (!filmId) {
        filmId = 6;
    }
    return filmId;
}

// Display Movie list
fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then((json) => { renderMovies(json) });

function renderMovies(films) {
    const movieList = document.getElementById('movie-list');
    films.forEach((film) => {

        const li = document.createElement('li');

        //add active class if film id matches
        if (film.id == filmId) {
            li.classList.add("active");
        }

        //create a link to the show page
        const a = document.createElement('a');
        a.href = `index.html?id=${film.id}`;
        a.innerHTML = film.title;
        li.appendChild(a);
        movieList.appendChild(li);
    });
};
