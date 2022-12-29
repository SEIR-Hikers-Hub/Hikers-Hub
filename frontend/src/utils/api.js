
import axios from 'axios';

// create user
export async function createUser(formData) {
    const { data } = await axios.post('http://localhost:5001/user/signup', formData)
    return data
};

// log in to user account
export async function loginToAccount(formData) {
    const { data } = await axios.post('http://localhost:5001/user/login', formData)
    return data
}

// add trail
export async function createTrail(formState) {
    const { data } = await axios.post('http://localhost:5001/trail', formState)
    return data
};