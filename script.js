//TMD API

/*const api_key = 'api_key=d0b6a8b70638aff6e9306cec3d0d132a';
const base_url = 'https://api.themoviedb.org/3';
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + ;

*/

const main = document.createElement('main')
main.className = 'movies_body'

//fetch our data from the api
function getData(){
    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {

        data.forEach(movies => {
            //create ,div,img,h3,p

            const divMovies = document.createElement('div');
            divMovies.className = 'movies';
            const image = document.createElement('img');
            image.class = 'movie_image';
            const divMoviesInformation = document.createElement('div');
            divMoviesInformation.class = 'movies_info';
            const title = document.createElement('h4');
            title.className = 'title';
            const rate = document.createElement('span');
            const overview = document.createElement('div');
            overview.className = 'overview';

            //assign values
            image.src = `${movies.poster_path}`;
            title.textContent =`${movies.title}`;
            rate.textContent =`${movies.vote_average}`;
            overview.textContent = `${movies.overview}`;

            //append the child element to the parent element
            document.body.appendChild(main);
            main.appendChild(divMovies);
            divMovies.appendChild(image);
            divMovies.appendChild(divMoviesInformation);
            divMoviesInformation.appendChild(title);
            divMoviesInformation.appendChild(rate);
            divMovies.appendChild(overview);


            
        });
    })
};
