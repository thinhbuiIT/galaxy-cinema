import { api } from '../utils/customize-axios';

export const fetchFilmNowAndSoon = async () => {
    return await api.get('/nowAndSoon')
}

export const fetchCinemaByFilm = async (key) => {
    return await api.get(`/movie/${key}`)
}

export const fetchSearchFilmBySlug = async (key) => {
    return await api.get(`/movieBySlug/${key}`)
}

export const fetchSearchFilmById = async (id) => {
    return await api.get(`/movieById/${id}`)
}