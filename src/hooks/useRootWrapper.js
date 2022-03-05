import { useReducer, useEffect } from 'react';

import { INITIAL_STATE, modalReducer } from '../reducers/modal/modal.reducer';
import { setModalsAction } from '../reducers/modal/modal.actions';

export const useModalState = (data) => {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch(setModalsAction(data));
  }, []);

  const value = { state, dispatch };

  return value;
};
