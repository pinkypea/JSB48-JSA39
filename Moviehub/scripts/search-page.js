const TMDB_API_KEY = "ca75115bc2b339d29d236aac176376d8";
const BASE_URL = "https://api.themoviedb.org/search/movie";
const IMG_URL = "https://image.tmdb.org/t/p/w300";

const params = new URLSearchParams(window.location.search)
const keyword = params.get("query") || "";
const search_results = document.getElementById("search-results");

function fetch_movie (query) {
    fetch(`${BASE_URL}?api_key=${TMDB_API_KEY}&&query=${query}`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                let movie = data.results[i];
                search_results.innerHTML += `
                <div class="movie-card" onclick=open_movie(${movie.id})">
                <img src="${IMG_URL + movie.poster_path}>
                <h4>${movie.title}</h4>
                </div>`
            }
        })
        .catch(err => console.error(err));
}

function open_movie(id) {
    window.location.href = `../info.html?id=${id}`;
}