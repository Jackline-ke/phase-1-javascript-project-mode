//TMD API

/*const api_key = 'api_key=d0b6a8b70638aff6e9306cec3d0d132a';
const base_url = 'https://api.themoviedb.org/3';
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + ;

*/

const main = document.createElement('main')

//fetch our data from the api
function getData(){
    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {

        data.forEach(movie => {
            //create ,div,img,h3,p

            con
            
        });
    })
}