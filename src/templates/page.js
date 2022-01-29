import React from 'react';
import DefaultLayout from '../components/DefaultLayout';

import { useSetRecoilState } from 'recoil';
import { modalSelector } from '../recoil/selectors';

const Page = ({ pageContext }) => {
  const setModal = useSetRecoilState(modalSelector);

  return (
    <DefaultLayout>
      <h1>{pageContext.title}</h1>
      <button onClick={() => setModal(pageContext.template.modal.modalTarget)}>Modal trigger</button>
    </DefaultLayout>
  )
}

export default Page;
