import { EMPLOYEE_UPDATE, EMPLOYEE_RESET } from '../actions/types';

const INITILIZE_STATE = {
  name: '',
  phone: '',
  shift: 'Monday'
};

export default (state = INITILIZE_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_RESET:
      return INITILIZE_STATE;
    default:
      return state;
  }
};
