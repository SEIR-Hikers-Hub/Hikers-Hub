
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


// edit trail, get data
export async function editTrail({id}) {
    const { data } = await axios.get(`http://localhost:5001/trail/:${id}`)
    return data
};

// update trail
export async function updateTrail(formState) {
    const { data } = await axios.post('http://localhost:5001/trail/:id', formState)
    return data
};
