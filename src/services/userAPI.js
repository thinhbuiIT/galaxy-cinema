import { apiUser } from '../utils/customize-axios'


export const login = async (user) => {
    return await apiUser.post('/Login', user)
}

export const register = async (user) => {
    return await apiUser.post('/user', user)
}