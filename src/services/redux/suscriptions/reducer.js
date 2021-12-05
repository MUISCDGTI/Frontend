import {
    GET_SUSCRIPTIONS_REQUEST,
    GET_SUSCRIPTIONS_SUCCESS,
    GET_SUSCRIPTIONS_ERROR,
    CREATE_SUSCRIPTION_SUCCESS,
    CREATE_SUSCRIPTION_REQUEST,
    CREATE_SUSCRIPTION_ERROR,
    DELETE_SUSCRIPTION_REQUEST,
    DELETE_SUSCRIPTION_ERROR,
    DELETE_SUSCRIPTION_SUCCESS,
    UPDATE_SUSCRIPTION_SUCCESS,
  } from './types';
  import Suscription from '../../../models/Suscription';
  
  const initialState = {
    suscriptions: [],
    fetching: false,
    errorMessages: null,
    total: 0,
    created: false,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_SUSCRIPTIONS_REQUEST:
      case CREATE_SUSCRIPTION_REQUEST:
      case DELETE_SUSCRIPTION_REQUEST:
        return { ...state, fetching: true };
      case GET_SUSCRIPTIONS_SUCCESS:
        return {
          ...state, suscriptions: payload, fetching: false, total: payload.length,
        };
      case CREATE_SUSCRIPTION_SUCCESS:
        return {
          ...state,
          suscriptions: [...state.suscriptions, new Suscription(payload)],
          fetching: false,
          total: state.total + 1,
          created: true,
        };
  
      case UPDATE_SUSCRIPTION_SUCCESS:
      {
        const suscriptions = [...state.suscriptions];
        const index = suscriptions.findIndex((suscription) => suscription.id === payload.id);
        if (index > -1) {
          suscriptions[index] = payload;
          return { ...state, suscriptions, fetching: false };
        }
        return { ...state, fetching: true };
      }
      case GET_SUSCRIPTIONS_ERROR:
      case CREATE_SUSCRIPTION_ERROR:
      case DELETE_SUSCRIPTION_ERROR:
        return {
          ...state, errorMessages: payload.data, fetching: false,
        };
  
      case DELETE_SUSCRIPTION_SUCCESS:
        return {
          ...state,
          suscriptions: state.suscriptions.filter((item) => item.id !== payload.id),
          fetching: false,
          total: state.total - 1,
        };
      case 'CLEAR_STATE':
        return { ...initialState };
  
      case 'CLEAR_ERRORS':
        return { ...state, errorMessages: null, created: false };
  
      default:
        return { ...state };
    }
  };
  