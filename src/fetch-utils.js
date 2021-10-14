import request from 'superagent'
// const BE_URL = 'https://secure-springs-81342.herokuapp.com';
const BE_URL =  'http://localhost:3000';

export async function signup(email, password) {
    const response = await request
        .post(`${BE_URL}/auth/signup`)
        .send({ email, password })
    return response.body
}

export async function login(email, password) {
    const response = await request
        .post(`${BE_URL}/auth/signin`)
        .send({ email, password })
    return response.body
}

export async function postFavorite(id, token) {
    const response = await request
        .post(`${BE_URL}/api/favorites`)
        .send({ id: id })
        .set('Authorization', token);

    return response.body;
}

export async function searchBusinesses(searchString, locationString, token) {
    const response = await request
        .get(`${BE_URL}/businesses?q=${searchString}&location=${locationString}`)
        .set('Authorization', token);
    return response.body;
}

export async function getFavorites(token) {
    const response = await request  
        .get(`${BE_URL}/api/favorites`)
        .set('Authorization', token)

    return response.body
}