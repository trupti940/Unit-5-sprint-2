const apiKey = 'your_omdb_api_key'; // Replace with your OMDB API key
let currentPage = 1;
let totalResults = 0;
const resultsPerPage = 10;

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    currentPage = 1; // Reset to first page on new search
    const movieTitle = document.getElementById('movieTitle').value;
    searchMovies(movieTitle, currentPage);
});

function searchMovies(title, page) {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(title)}&page=${page}`)
    .then(response => response.json())
    .then(data => {
        if (data.Response === "True") {
            totalResults = parseInt(data.totalResults);
            displayMovies(data.Search);
            setupPagination();
            document.getElementById('errorMessage').textContent = ''; // Clear error message
        } else {
            document.getElementById('movieList').innerHTML = ''; // Clear previous results
            document.getElementById('errorMessage').textContent = data.Error;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('errorMessage').textContent = 'Something went wrong. Please try again later.';
    });
}

function displayMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = ''; // Clear previous results
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `${movie.Title} (${movie.Year})`;
        movieList.appendChild(li);
    });
}

function setupPagination() {
    const totalPages = Math.ceil(totalResults / resultsPerPage);
    document.getElementById('currentPage').textContent = currentPage;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;

    document.getElementById('prevPage').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            const movieTitle = document.getElementById('movieTitle').value;
            searchMovies(movieTitle, currentPage);
        }
    });

    document.getElementById('nextPage').addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            const movieTitle = document.getElementById('movieTitle').value;
            searchMovies(movieTitle, currentPage);
        }
    });
}
