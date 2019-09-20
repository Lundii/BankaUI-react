import * as types from './types';
import axiosInstance from '../utils/axios';

export const updateFormInput = (payload) => {
  return{
    type: types.UPDATE_FORMS,
    payload
  }
};

// export const submitForm = (payload) => {
//   return {
//     type: types.SUBMIT_FORM,
//     payload
//   }
// }

export const submitForm = (form) => {
  return (dispatch, getState) => {
    const { forms } = getState();
    const body = forms[`${form}`];
    switch (form) {
      case 'login': {
        return axiosInstance.post('/auth/signin', body)
          .then( response => {
            console.log(response)
          })
      }
      
    }
  }
}