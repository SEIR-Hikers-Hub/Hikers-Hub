
import axios from 'axios';



// create user
export async function createUser(formData) {
    const { data } = await axios.post('user/signup', formData)
    return data
};

// log in to user account
export async function loginToAccount(formData) {
    const { data } = await axios.post('user/login', formData)
    return data
}

// add trail
export async function createTrail(formState) {
    const { data } = await axios.post('trail', formState)
    return data
};


// edit trail, get data
export async function editTrail(id) {
    const editTrailData = await axios.get(`${id}`)
    return editTrailData.data
};

// update trail
export async function updateTrail(id, formState) {
    const updatedData = await axios.put(`${id}`, formState)
    return updatedData.data
};

// delete trail
export async function deleteTrail(id) {
    const deleteData = await axios.delete(`${id}`)
    return console.log('deleted!')
};

// create review
export async function createReview(id, formState) {
    const createdReview = await axios.put(`/review/${id}`, formState);
    return createdReview.data
};

// export async function createReview(id, formState) {
//     const createdReview = await axios.put(`trail/${id}/review`, formState)
//     return createdReview.data
// };