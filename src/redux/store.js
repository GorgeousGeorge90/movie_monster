import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mainReducer from './mainSlice/mainSlice';
import contactsReducer from './contactsSllice/contactsSlice';
import sidebarReducer from './sidebarSlice/sidebarSlice';




const rootReducer = combineReducers({
    main: mainReducer,
    contacts: contactsReducer,
    sidebar: sidebarReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

window.store = store

export default store