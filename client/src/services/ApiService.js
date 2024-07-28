import axios from 'axios';

const api = axios.create({
    baseURL: "https://react-library-api.vercel.app",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

export {
    api
}

    
