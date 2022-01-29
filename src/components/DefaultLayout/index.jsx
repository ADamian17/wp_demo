import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useSetRecoilState } from 'recoil';
import { modalState } from '../../recoil/atoms';

/* == Internal Modules == */
import MainNav from '../Primary-nav';
import { formtModalsToObj } from '../../utils';


const DefaultLayout = ({ children }) => {
  const setModals = useSetRecoilState(modalState);

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