import axios from 'axios';

const API_URL = 'http://localhost:4000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000, // Adjust timeout as needed
    headers: {
        'Content-Type': 'application/json'
    }
});

// get data
export const fetchData = async (endpoint) => {
    try {
        const response = await axiosInstance.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        // throw error;
    }
};

// post data
export const postData = async (endpoint, data) => {
    try {
        const response = await axiosInstance.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        // throw error;
    }
};