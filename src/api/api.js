import { get, post } from './http'

export const home = () => get('/api/home')
export const city = () => get('/api/city')
export const detail = p => get('/api/detail', p)
export const login = p => post('/api/login', p)
export const user = p => post('/api/users', p)
