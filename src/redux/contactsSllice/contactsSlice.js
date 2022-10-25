import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {postAPI} from '../../api/api';

export const getAllPosts = createAsyncThunk(
    'contacts/getPosts',
    async (args,{dispatch}) => {
        const response = await postAPI.getPosts()
        if (response.status === 200) {
            const payload = Object.keys(response.data).map(key => {
                return {
                    ...response.data[key],
                    id:key,
                }
            })
            dispatch(getPosts(payload))
        } else {
            console.log(response.status)
        }
    }
)

export const addNewPost = createAsyncThunk(
    'contacts/addNewPost',
    async (args,{dispatch})=>{
        const {name, review} = args
        const body = {
            name,
            review,
            likes: 0,
        }
        const response = await postAPI.addPost(body)
        if (response.status === 200) {
            const newPost = {
                ...body,
                id:response.data.name,
            }
            dispatch(addPost(newPost))
        } else {
            console.log(response.status)
        }
    }
)

export const deleteOldPost = createAsyncThunk(
    'contacts/deleteOldPost',
    async (id,{dispatch})=> {
        const response = await postAPI.deletePost(id)
        if (response.status === 200) {
            dispatch(deletePost(id))
        } else {
            console.log(response.status)
        }
    }
)

export const updatePost = createAsyncThunk(
    'contacts/updatePost',
    async (data,{dispatch}) => {
        const {id,likes} = data
        const newLike = likes + 1
        const response = await postAPI.updatePost(id,newLike)
        if (response.status === 200) {
            dispatch(addLike(id))
        }
    }
)


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        posts: [],
        isFetching: false,
    },
    reducers: {
        getPosts: (state, action) => {
            state.posts = action.payload
        },

        addPost: (state, action) => {
            state.posts.push(action.payload)
        },

        addLike: (state, action) => {
            const newPost = state.posts.find(post => post.id === action.payload)
            newPost.likes = newPost.likes + 1
        },

        deletePost: (state, action) => {
             const newPosts = state.posts.filter(post => post.id !== action.payload)
             state.posts = newPosts
        }
    },

    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.isFetching = true
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.isFetching = false
        },
        [addNewPost.pending]: (state, action) => {
            state.isFetching = true
        },
        [addNewPost.fulfilled]: (state, action) => {
            state.isFetching = false
        },
        [deleteOldPost.pending]: (state, action) => {
            state.isFetching = true
        },
        [deleteOldPost.fulfilled]: (state, action) => {
            state.isFetching = false
        },
        [updatePost.pending]: (state, action) => {
            state.isFetching = true
        },
        [updatePost.fulfilled]: (state, action) => {
            state.isFetching = false
        },

    }
})

export const {getPosts, addPost, addLike, deletePost} = contactsSlice.actions
export default contactsSlice.reducer