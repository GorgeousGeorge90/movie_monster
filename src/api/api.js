import axios from 'axios';


const instance = axios.create({
    method: 'GET',
    baseURL:'https://api.themoviedb.org/3',
})

const baseUrl = `https://kinomonstr-bc5bc-default-rtdb.firebaseio.com`

export const movieApi = {

    getMovie: () => instance(`/discover/movie?sort_by=popularity.desc&api_key=bd3e8033318000fc97ee3efcc6c6af83`),

    getTV: () => instance(`/tv/top_rated?api_key=bd3e8033318000fc97ee3efcc6c6af83&language=en-US&page=1`),

}

export const postAPI = {

    getPosts: ()=> axios.get(`${baseUrl}/posts.json`),

    addPost: body => axios.post(`${baseUrl}/posts.json`,body),

    updatePost: (id,likes) => axios.patch(`${baseUrl}/posts/${id}.json`,{
        likes:likes,
    }),

    deletePost: id => axios.delete(`${baseUrl}/posts/${id}.json`)
}


