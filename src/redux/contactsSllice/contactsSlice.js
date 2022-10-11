import {createSlice} from '@reduxjs/toolkit';


const contactsSlice = createSlice({
        name: 'contacts',
        initialState: {
            posts: JSON.parse(localStorage.getItem('posts')) || []
        },
        reducers: {
            addPost:(state,action) => {
                const newPost = {
                    id:state.posts.length,
                    name:action.payload.name,
                    text:action.payload.review,
                    likes:0,
                }
                state.posts.push(newPost)
            },
            addLike:(state,action)=> {
                state.posts.map(post=> {
                    if (post.id === action.payload) {
                        return post.likes++
                    } else {
                        return post
                    }
                })
            }
        }
    }
)

export const {addPost, addLike} = contactsSlice.actions
export default contactsSlice.reducer