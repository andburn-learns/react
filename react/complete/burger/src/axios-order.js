import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-675c8.firebaseio.com/'
});

export default instance;