import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import NavItems from '../NavItems';

const MainNav = () => {

  const query = graphql`
  {
    wpMenu(name: {eq: "Main Nav"}) {
      menuItems {
        nodes {
          id
          label
          path
        }
      }
    }
  }`;


  const { wpMenu: { menuItems } } = useStaticQuery(query);

  return (
    menuItems && <NavItems menuItems={menuItems.nodes} />
  )
}

export default MainNav;
