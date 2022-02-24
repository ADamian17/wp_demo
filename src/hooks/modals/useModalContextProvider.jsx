import React, { useReducer, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { INITIAL_STATE, modalReducer } from '../../reducers/modal/modal.reducer';
import ModalContext from '../../contexts/ModalsContext';
import { setModals } from '../../reducers/modal/modal.actions';
import { formtModalsToObj } from '../../utils';

export const useModalContextProvider = () => {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_STATE);

  const WP_MODAL_QUERY = graphql`
  {
    allWpModal {
      edges {
        node {
          slug
          modalContent {
            modalCopy
            modalCta
            modalImage {
              altText
              sourceUrl
            }
            showModal
          }
        }
      }
    }
  }
  `;

  const { allWpModal } = useStaticQuery(WP_MODAL_QUERY);

  useEffect(() => {
    const modalsMap = allWpModal && formtModalsToObj(allWpModal.edges);

    dispatch(setModals(modalsMap));
  }, []);

  const value = { state, dispatch };

  const ModalsContextProvider = ({ children }) => {

    return (
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
    );
  };

  return ModalsContextProvider;
};
