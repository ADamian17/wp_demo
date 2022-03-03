import ModalTypes from './modal.types';

export const INITIAL_STATE = {}

export const modalReducer = (state, action) => {
  switch (action.type) {
    case ModalTypes.SET_MODALS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
