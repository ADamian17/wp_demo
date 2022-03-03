import React, { useEffect, useReducer } from 'react';

import { INITIAL_STATE, modalReducer } from '../../reducers/modal/modal.reducer';
import { setModalsAction } from '../../reducers/modal/modal.actions';

import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { modalState, pageCountState } from '../../recoil/atoms';

import ModalsQueries from '../../StaticQueries/Modals.query';

/* == Internal Modules == */
import MainNav from '../Primary-nav';
import { formtModalsToObj } from '../../utils';
import { useModalState } from '../../hooks/useRootWrapper';

const DefaultLayout = ({ children }) => {
  const testing = useModalState()
  console.log({ testing });

  const setModals = useSetRecoilState(modalState);
  const resetPageCount = useResetRecoilState(pageCountState);

  const modals = ModalsQueries();

  useEffect(() => {
    const modalsMap = formtModalsToObj(modals);

    setModals(modalsMap);
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