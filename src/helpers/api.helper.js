import axios from 'axios';
import TEST_URL from '../config/endpoints.js';

const sendRequest = async (url, data = null, method = 'get') => {
    try {
        const response = await axios({
            method,
            url: `${TEST_URL}/${url}`,
            headers: {},
            data,
        });
        return {
            status: response.status,
            headers: response.headers,
            request: response.request,
            data: response.data,
        };
    } catch (error) {
        return {
            status: error.response.status,
        };
    }
};

export default sendRequest

