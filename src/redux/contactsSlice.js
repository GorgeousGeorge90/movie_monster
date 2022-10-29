import {createSlice} from '@reduxjs/toolkit';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        posts: [],
        isFetching: false,
    },
    reducers: {

        getAllPosts:()=>{},

        getPosts: (state, action) => {
            state.posts = action.payload
        },

        addNewPost:()=>{},

        addPost: (state, action) => {
            state.posts.push(action.payload)
        },

        updateOldPost: ()=> {},

        addLike: (state, action) => {
            const newPost = state.posts.find(post => post.id === action.payload)
            newPost.likes = newPost.likes + 1
        },

        deleteOldPost: ()=>{},

        deletePost: (state, action) => {
             const newPosts = state.posts.filter(post => post.id !== action.payload)
             state.posts = newPosts
        },

        getIsFetching:(state, action) => {
            state.isFetching = action.payload
        }
    },
})

export const {deleteOldPost, updateOldPost, addNewPost, getAllPosts, getPosts, addPost, addLike, deletePost} = contactsSlice.actions
export default contactsSlice.reducer