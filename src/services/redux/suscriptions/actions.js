import {
    CREATE_SUSCRIPTION_REQUEST,
    DELETE_SUSCRIPTION_REQUEST,
    GET_SUSCRIPTIONS_REQUEST,
    CLEAR_ERRORS,
    UPDATE_SUSCRIPTION_REQUEST,
  } from './types';
  
  const getSuscriptions = (payload) => ({
    type: GET_SUSCRIPTIONS_REQUEST,
    payload,
  });
  
  const createSuscription = (payload) => ({
    type: CREATE_SUSCRIPTION_REQUEST,
    payload,
  });
  
  const deleteSuscription = (payload) => ({
    type: DELETE_SUSCRIPTION_REQUEST,
    payload,
  });
  
  const updateSuscription = (payload) => ({
    type: UPDATE_SUSCRIPTION_REQUEST,
    payload,
  });
  
  const clearErrors = () => ({
    type: CLEAR_ERRORS,
  });
  
  export {
    getSuscriptions, createSuscription, deleteSuscription, clearErrors, updateSuscription,
  };
  