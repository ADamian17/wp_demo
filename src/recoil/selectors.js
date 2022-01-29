import { selector } from 'recoil';
import { modalState } from './atoms';

export const modalSelector = selector({
  key: 'modalSelector',
  get: ({get}) => get(modalState),
  set: ({get, set}, val) => { 
    const prevModalsState = { ...get(modalState)};
    
    const nextState = {
      ...prevModalsState,
      [val]: {
        show: !prevModalsState[val].show
      },
    };

    console.log('modal selector', nextState);

    return set(modalState, nextState);
  }
})
