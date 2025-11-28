const TMDB_API_KEY = "ca75115bc2b339d29d236aac176376d8";
const BASE_URL = "https://api.themoviedb.org/3/movie";
const IMG_URL = "https://image.tmdb.org/t/p/w300";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const movie_id = params.get("id");

  //===== 1. Movie details =====
  fetch(`${BASE_URL}/${movie_id}?api_key=${TMDB_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      // Ảnh phim
      document.getElementById("preview-img").src = IMG_URL + data.poster_path;

      // Tiêu đề phim
      document.getElementById("movie-title").textContent = data.title;

      // Ngày phát hành phim
      document.getElementById("release-date").innerHTML = `
      Release date: ${data.release_date}`;

      // Mô tả phim
      document.getElementById("movie-description").textContent = data.overview;

      // Thể loại phim
      const genres_box = document.getElementById("genres");
      for (let i = 0; i < data.genres.length; i++) {
        genres_box.innerHTML += `<span class="genre-tag">${data.genres[i].name}</span>`;
      }
    })
    .catch((err) => console.error(err));

  //===== 2. Movie casts =====  
  fetch(`${BASE_URL}/movie/${movie_id}/credits?api_key=${TMDB_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      const castGrid = document.getElementById("casts-grid");
      castGrid.innerHTML = "";

      const casts = data.cast.slice(0, 12); // Lấy 12 cast đầu

      for (let i = 0; i < casts.length; i++) {
        const cast = casts[i];

        castGrid.innerHTML += `
          <div class="cast-card">
            <img src="${IMG_URL + cast.profile_path}" alt="${cast.name}">
            <p class="cast-name">${cast.name}</p>
            <p class="cast-role">${cast.character || ""}</p>
          </div>
        `;
      }
    })
    .catch((err) => console.error("Lỗi tải casts:", err));
});
