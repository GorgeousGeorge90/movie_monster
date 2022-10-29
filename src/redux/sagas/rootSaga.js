import contactsWatcher from './contactsSaga';
import mainWatcher from './mainSaga';
import {all} from 'redux-saga/effects';


export default function* rootWatcher() {
    yield all([
        contactsWatcher(),
        mainWatcher(),
    ])
}