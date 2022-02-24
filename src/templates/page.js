import React, { useEffect } from 'react';
import DefaultLayout from '../components/DefaultLayout';

import { useSetRecoilState } from 'recoil';
import { modalSelector, setTimeoutSelector } from '../recoil/selectors';
import Modal from '../components/UI/Modal';

const Page = ({ pageContext }) => {
  const setModal = useSetRecoilState(modalSelector);
  const setTimeoutHandler = useSetRecoilState(setTimeoutSelector);

  useEffect(() => {
    const handleShowModal = () => {
      setModal(pageContext.template.modalTrigger.triggerId)
    }
    setTimeoutHandler(setTimeout(handleShowModal, 2000))
  }, [])

  return (
    <DefaultLayout>
      <h1>{pageContext.title}</h1>
      <button onClick={() => setModal(pageContext.template.modalTrigger.triggerId)}>Modal trigger for {pageContext.template.modalTrigger.triggerId}</button>

      <Modal modalSlug={pageContext.template.modalTrigger.triggerId} />
      {
        modalDetails && modalDetails.show ? 
        <div>
          <h1>{modalDetails.modalContent.modalCopy}</h1> 
          <input placeholder='Email' />
          <button>{modalDetails.modalContent.modalCta}</button> 
        </div> : 
        ''
      }
    </DefaultLayout>
  )
}

export default Page;
