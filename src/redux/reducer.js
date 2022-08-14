import {  GET_FIRST_NAME } from '../redux/action';

const initialState = {
    fullName: '',
    lastName: '',
    age: 0,
    photo: '',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FIRST_NAME:
            return { ...state, cities: action.payload };
        default:
            return state;
    }
}

export default userReducer;