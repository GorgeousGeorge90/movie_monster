import axios from 'axios';


const instance = axios.create({
    method: 'GET',
    baseURL:'https://api.themoviedb.org/3',
})

const movieApi = {

    getMovie: () => instance(`/discover/movie?sort_by=popularity.desc&api_key=bd3e8033318000fc97ee3efcc6c6af83`),

    getTV: () => instance(`/tv/top_rated?api_key=bd3e8033318000fc97ee3efcc6c6af83&language=en-US&page=1`),

}


export default movieApi