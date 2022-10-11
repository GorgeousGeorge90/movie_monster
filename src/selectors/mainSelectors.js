import {createSelector} from '@reduxjs/toolkit';

export const getFilms = state => state.main.films
export const getSeries = state => state.main.series
export const getNewFilms = createSelector(
    getFilms,
    films => films.filter(film=> films.indexOf(film) < 4)
)

export const getPosts = state=>state.contacts.posts