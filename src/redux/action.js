import { exp } from "react-native-reanimated";

export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_FIRST_NAME = 'GET_FIRST_NAME';
export const GET_LAST_NAME = 'GET_LAST_NAME';
export const GET_USER_AGE = 'GET_USER_AGE';
export const GET_USER_PHOTO = 'GET_USER_PHOTO';

const API_URL = 'https://simple-contact-crud.herokuapp.com/contact';

// export const getContact = () => {
//     try {
//         return async (dispatch) => {
//             const result = await fetch(API_URL, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             const json = await result.json();
//             if (json) {
//                 dispatch({
//                     type: GET_USER_DATA,
//                     payload: json
//                 });
//             } else {
//                 console.log('Unable to fetch!');
//             }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

export const getContact = () => {
    return async (dispatch) => {
      const res = await fetch(API_URL);
      const respondJson = await res.json();
      return dispatch({
        type: GET_USER_DATA,
        payload: respondJson,
      });
    };
  };

export const getContactById = (id) => {
    try {
        return async (dispatch) => {
            const result = await fetch(API_URL + '/' + id, {
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

export const updateContact = (id, firstName, lastName, age, photo) => {
    try {
        return async (dispatch) => {
            const result = await fetch(API_URL + '/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    age,
                    photo
                })
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

export const createContact = (firstName, lastName, age, photo) => {
    try {
        return async (dispatch) => {
            const result = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    age,
                    photo
                })
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

export const deleteContact = (id) => {
    try {
        return async (dispatch) => {
            const result = await fetch(API_URL + '/' + id, {
                method: 'DELETE',
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

export const setFirstName = firstName => dispatch => {
    dispatch({
        type: SET_FIRST_NAME,
        payload: firstName,
    });
};

export const setLastName = lastName => dispatch => {
    dispatch({
        type: SET_LAST_NAME,
        payload: lastName,
    });
}

export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
};

export const setPhoto = photo => dispatch => {
    dispatch({
        type: SET_USER_PHOTO,
        payload: photo,
    });
}