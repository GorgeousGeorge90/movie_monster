import axios from 'axios';


const instance = axios.create({
    method: 'GET',
    baseURL:'https://api.themoviedb.org/3',
})

const movieApi = {

    getMovie: () => instance(`/discover/movie?sort_by=popularity.desc&api_key=bd3e8033318000fc97ee3efcc6c6af83`),

    // getRating: ()=> instance('title/get-ratings', {
    //     params: {tconst: 'tt0944947'},
    // })

}


export default movieApi