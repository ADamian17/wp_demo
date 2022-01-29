import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: {}
});

export const setTimeoutState = atom({
  key: 'setTimeoutState',
  default: null
})
