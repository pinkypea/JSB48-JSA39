const containers = document.querySelectorAll(".movie-slider-container");

for (let i = 0; i < containers.length; i++) {
  const container = containers[i];
  const slider = container.querySelector(".movie-slider");
  const leftBtn = container.querySelector(".scroll-btn.left");
  const rightBtn = container.querySelector(".scroll-btn.right");

  leftBtn.onclick = () => slider.scrollBy({ left: -500, behavior: "smooth" });
  rightBtn.onclick = () => slider.scrollBy({ left: 500, behavior: "smooth" });
}


const TMDB_API_KEY = "ca75115bc2b339d29d236aac176376d8";
const BASE_URL = "https://api.themoviedb.org/3/movie";
const IMG_URL = "https://image.tmdb.org/t/p/w300";

function fetch_movie(url, container_id) {
  fetch(`${BASE_URL}${url}?api_key=${TMDB_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById(container_id);

      for (let i = 0; i < data.results.length; i++) {
        const movie = data.results[i];

        const div = document.createElement("div");
        div.className = "movie-card";

        div.innerHTML = `
        <img src="${IMG_URL + movie.poster_path}">
        <p>${movie.title}</p>
        `;
        
        container.appendChild(div);
      }
    })
    .catch((err) => console.log(err));
}
fetch_movie("/now_playing", "now-playing");
fetch_movie("/popular", "popular");
fetch_movie("/top_rated", "top-rated");
fetch_movie("/upcoming", "upcoming");


fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ca75115bc2b339d29d236aac176376d8")
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

// https://api.themoviedb.org/3/movie/now_playing
// https://api.themoviedb.org/3/movie/popular
// https://api.themoviedb.org/3/movie/top_rated
// https://api.themoviedb.org/3/movie/upcoming