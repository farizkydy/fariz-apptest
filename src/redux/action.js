export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_FIRST_NAME = 'GET_FIRST_NAME';
export const GET_LAST_NAME = 'GET_LAST_NAME';
export const GET_USER_AGE = 'GET_USER_AGE';
export const GET_USER_PHOTO = 'GET_USER_PHOTO';

const API_URL = 'https://simple-contact-crud.herokuapp.com/contact';

export const getContact = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_USER_DATA,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const setFirstName = name => dispatch => {
    dispatch({
        type: SET_FIRST_NAME,
        payload: name,
    });
};

export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
};

export const increaseAge = age => dispatch => {
    dispatch({
        type: INCREASE_AGE,
        payload: age,
    });
};