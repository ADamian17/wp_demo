import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { modalSelector, setTimeoutSelector } from '../../../recoil/selectors';

import './Modal.scss';

const Modal = ({ modalSlug }) => {
  const [modals, setModals] = useRecoilState(modalSelector);
  const resetTimeoutState = useResetRecoilState(setTimeoutSelector)
  const modalDetails = modals[modalSlug];

  const handleClick = () => {
    resetTimeoutState()
    setModals(modalSlug)
  }

  return (
    <>
      {modalDetails &&
        <div className={`modal ${modalDetails.modalContent.showModal ? 'modal--active' : ''}`}>
          <h1>{modalDetails.modalContent.modalCopy}</h1>
          <input placeholder='Email' />
          <button>{modalDetails.modalContent.modalCta}</button>
          <button onClick={handleClick}>close modal</button>
        </div>
      }
    </>
  )
}

export default Modal