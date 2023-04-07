/*
const main = document.createElement('main')
main.className = 'movies_body'



const search_url = 'http://localhost:3000/movies/search/movies?api_key=d0b6a8b70638aff6e9306cec3d0d132a'


//fetch our data from the api
function getData(){
    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {

        data.forEach(movies => {
            //create ,div,img,h3,p

            const form = document.getElementById('form')
const search = document.getElementById('search')

            const divMovies = document.createElement('div');
            divMovies.className = 'movies';
            const image = document.createElement('img');
            image.className = 'movie_image';
            const divMoviesInformation = document.createElement('div');
            divMoviesInformation.className = 'movies_info';
            const title = document.createElement('h4');
            title.className = 'title';
            const rate = document.createElement('span');
            rate.className = '${getColor(movies.vote_average)}';
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
            
            form.addEventListener('submit', (event) => {
                event.preventDefault();
            
                const searchTerm = search.value;
            
                if(searchTerm){
                    getData(search_url + '&query=' + searchTerm)
                }
            });

        });
    })
}
//call the function
const fetchData = getData();

//function yo change vote_average changing
function getColor(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}
*/











































//TMD API
const api_key = 'api_key=d0b6a8b70638aff6e9306cec3d0d132a';
const base_url = 'https://api.themoviedb.org/3';
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + api_key;
const image_url = 'https://image.tmdb.org/t/p/w500';

const main = document.createElement('main')
main.className = 'movies_body'

getData(api_url);

function getData(url){
    
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        
        console.log(data.results)
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML = '';
    
    data.forEach(movie =>{
        const {title, poster_path, overview, vote_average} = movie
        const movieElement = document.createElement('div')
        movieElement.classList.add('movie');
        movieElement.innerHTML = `

           <img src ="${image_url+poster_path}" alt = "Movie Image" class= "movies_image">
           
           <div class = "movies_info">
               <h4>${title}</h4>
               <span class ="${getColor(vote_average)}">${vote_average}</span>
           </div>

           <div class = "overview">
               <h3>Overview</h3>
               ${overview}
           
           </div>

        `
        main.appendChild(movieElement);
        document.body.appendChild(main)
        
    })
}
function getColor(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

