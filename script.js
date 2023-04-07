
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

// featching our data
function getData(url){
    fetch(url)
    //converting the string data to object json
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML = '';
    
    //creating our html elements
    data.forEach(movie => {
        const {title, poster_path, overview, vote_average} = movie;
        const movieElement = document.createElement('div')
        movieElement.classList.add('movie');
        movieElement.innerHTML = `

           

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

//ading color to our ratings
function getColor(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
};
//adding an event listener to the searchBar
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getData(search_url + '&query=' +  searchTerm )
    }
});







