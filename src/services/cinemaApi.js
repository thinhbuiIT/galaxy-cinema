import { api } from '../utils/customize-axios'

export const fetchCinemas = async () => {
    return await api.get('/cinemas')
}

export const fetchFilmByCinemas = async (id) => {
    return await api.get(`/cinemas/${id}`)
}
