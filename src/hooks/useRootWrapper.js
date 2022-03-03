import { useReducer, useEffect } from 'react';

import { INITIAL_STATE, modalReducer } from '../reducers/modal/modal.reducer';
import { setModalsAction } from '../reducers/modal/modal.actions';
import { formtModalsToObj } from '../utils';
import ModalsQueries from '../StaticQueries/Modals.query';

export const useModalState = () => {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_STATE);
  const modals = ModalsQueries();

  useEffect(() => {
    const modalsMap = modals && formtModalsToObj(modals);

    dispatch(setModalsAction(modalsMap));
  }, []);

  const value = { state, dispatch };

  return value;
};