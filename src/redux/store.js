import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mainReducer from './mainSlice';
import contactsReducer from './contactsSlice';
import sidebarReducer from './sidebarSlice';
import createSagaMiddleware from 'redux-saga';
import rootWatcher from './sagas/rootSaga';




const rootReducer = combineReducers({
    main: mainReducer,
    contacts: contactsReducer,
    sidebar: sidebarReducer,
})

const saga = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
})
saga.run(rootWatcher)

window.store = store

export default store