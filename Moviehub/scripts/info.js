const TMDB_API_KEY = "9b7c3ede447b14c5e0e9d33a137ddac9";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w300";

document.addEventListener("DOMContentLoaded", function () {
  // Lấy ID phim từ URL
  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");

  // ============================
  // 1. Movie Details
  // ============================
  // ============================
// 1. Movie Details
// ============================
fetch(`${BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`)
  .then((res) => res.json())
  .then((data) => {
    // Poster
    document.getElementById("preview-img").src = IMG_URL + data.poster_path;

    // Tiêu đề
    document.getElementById("movie-title").textContent = data.title;

    // Ngày phát hành
    document.getElementById("release-date").textContent =
      "Release Date: " + data.release_date;

    // Mô tả
    document.getElementById("movie-description").textContent = data.overview;

    // Genres
    const genresBox = document.getElementById("genres");
    genresBox.innerHTML = ""; // reset
    for (let i = 0; i < data.genres.length; i++) {
      genresBox.innerHTML += `<span class="genre-tag">${data.genres[i].name}</span>`;
    }

    // Nút Watch Now
    const watchBtn = document.getElementById("watch-now-btn");
    watchBtn.addEventListener("click", () => {
      window.location.href = `watch.html?id=${movieId}`;
    });
  })
  .catch((err) => console.error("❌ Lỗi tải thông tin phim:", err));



  // ============================
  // 2. CASTS
  // ============================
  fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${TMDB_API_KEY}`)
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
    .catch((err) => console.error("❌ Lỗi tải casts:", err));
});
