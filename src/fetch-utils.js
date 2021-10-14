import request from 'superagent'

export async function signup(email, password) {
    const response = await request
        .post('https://secure-springs-81342.herokuapp.com/auth/signup')
        .send({ email, password})
    return response.body
}

export async function login(email, password) {
    const response = await request
        .post('https://secure-springs-81342.herokuapp.com/auth/signin')
        .send({ email, password})
    return response.body
}