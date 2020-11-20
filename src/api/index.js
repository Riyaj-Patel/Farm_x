import axios from 'axios';

const url = 'http://localhost:8000';

export const fetchAcc = () => axios.get(url);
export const createAccount = (newPost) => axios.post('http://localhost:8000/signup/createAcc', newPost);