import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { modalState, pageCountState } from '../../recoil/atoms';

/* == Internal Modules == */
import MainNav from '../Primary-nav';
import { formtModalsToObj } from '../../utils';

const DefaultLayout = ({ children }) => {
  const setModals = useSetRecoilState(modalState);
  const resetPageCount = useResetRecoilState(pageCountState);

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

    setModals(modalsMap);

    const handlePageCount = () => resetPageCount();

    window.addEventListener('beforeunload', handlePageCount)

    return () => {
      window.removeEventListener('beforeunload', handlePageCount)
    }
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