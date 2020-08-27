import axios from 'axios';

const baseUri = 'http://localhost:8000/';

export function getProjects() {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${baseUri}api/projects`,
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error.response.statusText);
        });
    });
}

export function getSkills() {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${baseUri}api/skills`,
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error.response.statusText);
        });
    });
}

export function getFormations() {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${baseUri}api/formations?order[dateEnd]=desc`,
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error.response.statusText);
        });
    });
}

export function postContacts(form) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: `${baseUri}contact`,
            data: form,
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error.response.statusText);
        });
    });
}
