import { useContext } from 'react';

export const useStateValue = (ctx) => {
  const { state } = useContext(ctx);

  return state
};

export const useDispatch = (ctx) => {
  const { dispatch } = useContext(ctx);

  return dispatch;
};
