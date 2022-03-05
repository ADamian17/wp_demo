import React, { useEffect } from 'react';

import { useSetRecoilState, useResetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { modalState, pageCountState, modalsState } from '../../recoil/atoms';

import ModalsQueries from '../../StaticQueries/Modals.query';

/* == Internal Modules == */
import MainNav from '../Primary-nav';
import { formtModalsToObj } from '../../utils';
import { useModalState } from '../../hooks/useRootWrapper';

const DefaultLayout = ({ children }) => {

  const setModals = useSetRecoilState(modalState);
  const resetPageCount = useResetRecoilState(pageCountState);

  const [modalsList, setModalsState] = useRecoilState(modalsState);

  const modals = ModalsQueries();
  const modals2 = useModalState(modals)

  useEffect(() => {
    const modalsMap = formtModalsToObj(modals);

    setModals(modalsMap);
    setModalsState(modals2)
  }, []);

  console.log({ modalsList });

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
