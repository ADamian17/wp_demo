import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ModalsQueries = () => {
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

  const { allWpModal: { edges } } = useStaticQuery(WP_MODAL_QUERY);

  return edges
}

export default ModalsQueries;
