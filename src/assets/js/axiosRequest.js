import axios from 'axios';

const baseUri = 'http://localhost:8000/';

export function getToken() {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: `${ baseUri }authentication_token`,
            data: {
                email: 'test2@test.fr',
                password: 'test'
            }
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error.response.statusText);
        });
    });
}

export function axiosUser(token) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${ baseUri }api/users`,
            headers: {
                "Authorization" : `Bearer ${token}`
            },
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error.response.statusText);
        });
    });
}
