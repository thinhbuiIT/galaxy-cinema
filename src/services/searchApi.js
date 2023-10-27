import { api } from '../utils/customize-axios'


export const fetchSearchCity = async () => {
    return await api.get('/city')
}

export const fetchSearchMoreInfo = async () => {
    return await api.get('/moreInfo')
}