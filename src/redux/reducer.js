import { GET_FIRST_NAME, GET_LAST_NAME, GET_USER_AGE, GET_USER_PHOTO, GET_USER_DATA } from '../redux/action';

const initialState = {
    // firstName: '',
    // lastName: '',
    // age: 0,
    // photo: '',
    data: []
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return { ...state, data: action.payload };
        // case GET_FIRST_NAME:
        //     return { ...state, firstName: action.payload };
        // case GET_LAST_NAME:
        //     return { ...state, lastName: action.payload };
        // case GET_USER_AGE:
        //     return { ...state, age: action.payload };
        // case GET_USER_PHOTO:
        //     return { ...state, photo: action.payload };
        default:
            return state;
    }
}

export default userReducer;