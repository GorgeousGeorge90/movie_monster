import {createSelector} from '@reduxjs/toolkit';


export const getFilms = state => state.main.films
export const getSeries = state => state.main.series
export const getNews = state => state.main.news
export const getMainIsFetching = state => state.main.isFetching
export const getPosts = state => state.contacts.posts
export const getPostsIsFetching = state => state.contacts.isFetching
export const getCheck = state => state.sidebar.checked

export const getNewFilms = createSelector(
    getFilms,
    films => films.filter(film=> films.indexOf(film) < 4)
)

export const getSomeSeries = createSelector(
    getSeries,
    series=>series.filter(el=>series.indexOf(el) < 4)
)


