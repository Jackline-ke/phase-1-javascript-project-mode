
//TMD API
const api_key = 'api_key=d0b6a8b70638aff6e9306cec3d0d132a';
const base_url = 'https://api.themoviedb.org/3';
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + api_key;
const image_url = 'https://image.tmdb.org/t/p/w500';
const search_url = base_url + '/search/movies?' + api_key

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('movies_body')

getData(api_url);

function getData(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML = '';
    
    data.forEach(movie => {
        const {title, poster_path, overview, vote_average} = movie;
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
           <div class="comments">

           <div class="like">
           <button id="heart-btn"><i class="far fa-heart"></i></button>
           </div>

           <div class ="comment-section">
           <h5>Comments</h5>
           <input type="text" placeholder="Add a comment...">
           <button class="add-comment-btn">Add</button>
           <ul class="comment-list"></ul>
           </div>
           
           </div>

        `
        main.appendChild(movieElement);        
    });

    // Add event listeners to heart buttons
    const heartBtns = document.querySelectorAll('.like button');
    heartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('liked');
        });
    });

    const addCommentBtn = movieElement.querySelector('.add-comment-btn');
    addCommentBtn.addEventListener('click', (event) => {
        
    event.preventDefault(); // prevent form submission
    const commentInput = movieElement.querySelector('input[type="text"]');
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        const commentElement = document.createElement('li');
        commentElement.textContent = commentText;
        commentList.appendChild(commentElement);
        commentInput.value = '';
        commentInput.placeholder = "Add a comment...";
    }
});
};

function getColor(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getData(search_url + '&query=' +  searchTerm )
    }
});







