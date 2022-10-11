import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mainReducer from './mainSlice/mainSlice';
import contactsReducer from './contactsSllice/contactsSlice';




const rootReducer = combineReducers({
    main: mainReducer,
    contacts: contactsReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

window.store = store

export default store