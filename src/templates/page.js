import React from 'react';
import DefaultLayout from '../components/DefaultLayout';

import { useRecoilState } from 'recoil';
import { modalSelector } from '../recoil/selectors';

const Page = ({ pageContext }) => {
  const [modals, setModal] = useRecoilState(modalSelector);

  const modalDetails = modals && modals[pageContext.template.modalTrigger.triggerId];
  console.log({modalDetails});

  return (
    <DefaultLayout>
      <h1>{pageContext.title}</h1>
      <button onClick={() => setModal(pageContext.template.modalTrigger.triggerId)}>Modal trigger for {pageContext.template.modalTrigger.triggerId}</button>

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
