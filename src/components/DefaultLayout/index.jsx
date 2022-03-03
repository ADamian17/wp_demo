import React, { useEffect } from 'react';

import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { modalState, pageCountState } from '../../recoil/atoms';

import ModalsQueries from '../../StaticQueries/Modals.query';

/* == Internal Modules == */
import MainNav from '../Primary-nav';
import { formtModalsToObj } from '../../utils';

const DefaultLayout = ({ children }) => {
  const setModals = useSetRecoilState(modalState);
  const resetPageCount = useResetRecoilState(pageCountState);

  const modals = ModalsQueries();

  useEffect(() => {
    const modalsMap = formtModalsToObj(modals);

    setModals(modalsMap);

    // const handlePageCount = () => resetPageCount();

    // window.addEventListener('beforeunload', handlePageCount)

    // return () => {
    //   window.removeEventListener('beforeunload', handlePageCount)
    // }
  }, []);

  return (
    <div className='default-layout'>
      <header>
        <MainNav />
      </header>

      {children}
    </div>
  )
}

export default DefaultLayout