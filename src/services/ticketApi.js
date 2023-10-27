import { api } from '../utils/customize-axios'


export const fetchTicket = async () => {
    return await api.get('/Ticket')
}

export const postTicket = async (ticket) => {
    return await api.post('/Ticket', ticket)
}

export const deleteAllTicket = async () => {
    return await api.delete('/Ticket')
}