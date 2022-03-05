import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: {}
});

export const modalsState = atom({
  key: 'modalsState',
  default: null
});

export const setTimeoutState = atom({
  key: 'setTimeoutState',
  default: null
})

export const pageCountState = atom({
  key: 'pageCountState',
  default: 0
})
