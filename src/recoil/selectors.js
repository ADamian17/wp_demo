import { selector } from 'recoil';
import { modalState, setTimeoutState } from './atoms';

export const modalSelector = selector({
  key: 'modalSelector',
  get: ({get}) => get(modalState),
  set: ({get, set}, modal) => { 
    const prevModalsState = { ...get(modalState)};
    
    const nextState = {
      ...prevModalsState,
      [modal]: {
        ...prevModalsState[modal],
        modalContent: {
          ...prevModalsState[modal].modalContent,
          showModal: !prevModalsState[modal].modalContent.showModal
        }
      },
    };

    console.log('%c modal selector from recoil :)', 'color: aqua; font-size: 14px', nextState);

    return set(modalState, nextState);
  }
});

export const setTimeoutSelector = selector({
  key: 'setTimeoutSelector',
  get: ({get}) => get(setTimeoutState),
  set: ({set}, handlerFunc ) => {
    console.log({handlerFunc});
    return set(setTimeoutState, handlerFunc)
  } 
})
