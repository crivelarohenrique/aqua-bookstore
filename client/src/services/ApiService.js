import axios from 'axios';

const api = axios.create({
    baseURL: "https://react-library-frontend-flame.vercel.app/api",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

export {
    api
}

    
