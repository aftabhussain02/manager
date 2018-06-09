import { EMPLOYEE_UPDATE } from '../actions/types';

const INITILIZE_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITILIZE_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.props]: action.payload.value };
    default:
      return state;
  }
};
