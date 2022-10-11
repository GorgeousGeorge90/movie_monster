import {createSlice} from '@reduxjs/toolkit';


const contactsSlice = createSlice({
        name: 'contacts',
        initialState: {
            posts:[],
        },
        reducers: {
            addPost:(state,action) => {
                const newPost = {
                    id:state.posts.length,
                    name:action.payload.name,
                    text:action.payload.review,
                }
                state.posts.push(newPost)
            }
        }
    }
)

export const {addPost} = contactsSlice.actions
export default contactsSlice.reducer