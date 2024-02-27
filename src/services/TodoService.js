import axios from 'axios'
import { getToken } from './AuthService';

const REST_API_URI = 'http://localhost:8080/api/todo'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken()
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export const getAllTodos = () => axios.get(REST_API_URI)

export const addTodo = (todo) => axios.post(REST_API_URI, todo)

export const getTodo = (id) => axios.get(REST_API_URI+'/'+id)

export const updateTodo = (id, todo) => axios.put(REST_API_URI+'/'+id, todo)

export const deleteTodo = (id) => axios.delete(REST_API_URI+'/'+id)

export const completeTodo = (id) => axios.patch(REST_API_URI+'/'+id+'/complete')

export const incompleteTodo = (id) => axios.patch(REST_API_URI+'/'+id+'/incomplete')