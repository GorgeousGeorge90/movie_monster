import {put, call, takeEvery} from 'redux-saga/effects';
import {getIsFetching} from '../mainSlice';
import {postAPI} from '../../api/api';
import {addLike, addPost, deletePost, getPosts} from '../contactsSlice';


function* addPostWorker(action) {
    const {name,review} = action.payload
    const body = {
        name,
        review,
        likes: 0,
    }
    const response = yield call(()=> postAPI.addPost(body))
    if (response.status === 200) {
        const newPost = {
            ...body,
            id:response.data.name,
        }
        yield put(addPost(newPost))
    } else {
        console.log(response.status)
    }
}

function* updatePostWorker(action) {
    const {id,likes} = action.payload
    const newLike = likes + 1
    yield put(getIsFetching(true))
    const response = yield call(()=>postAPI.updatePost(id,newLike))
    if (response.status === 200) {
        yield put(addLike(id))
        yield(getIsFetching(false))
    }
}

function* deletePostWorker(action) {
    const id = action.payload
    yield put(getIsFetching(true))
    const response =yield call(()=>postAPI.deletePost(id))
    if (response.status === 200) {
        yield put(deletePost(id))
        yield put(getIsFetching(false))
    } else {
        console.log(response.status)
    }
}

function* fullPostsWorker() {
    yield put(getIsFetching(true))
    const response = yield call(()=>postAPI.getPosts())
    if (response.data !== null) {
        const payload = yield Object.keys(response.data).map(key => {
            return {
                ...response.data[key],
                id: key,
            }
        })
        yield put(getPosts(payload))
        yield put(getIsFetching(false))
    } else {
        console.log(response.status)
    }
}

function* contactsWatcher() {
    yield takeEvery('contacts/getAllPosts', fullPostsWorker)
    yield takeEvery('contacts/addNewPost', addPostWorker)
    yield takeEvery('contacts/deleteOldPost', deletePostWorker)
    yield takeEvery('contacts/updateOldPost', updatePostWorker)
}

export default contactsWatcher