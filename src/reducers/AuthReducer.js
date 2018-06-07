import {
  LOGIN_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from '../actions/types';

const INITILIZE_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false
};

export default (state = INITILIZE_STATE, action) => {
  switch (action.type) {
    case LOGIN_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_USER:
    return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '', loading: false };
    case LOGIN_USER_FAILED:
      return { ...state, error: 'Authentication Failed', password: '', loading: false };
    default:
      return state;
  }
};
