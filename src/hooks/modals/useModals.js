import { useModalContext } from '../../contexts/ModalsContext';
import { setModals } from '../../reducers/modal/modal.actions';

export const useModals = () => {
  const { dispatch } = useModalContext();

  return {
    handleSetModals: (payload) => dispatch(setModals(payload))
  }
};
