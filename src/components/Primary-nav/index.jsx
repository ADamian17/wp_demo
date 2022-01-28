import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

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

  const menuItemsList = menuItems.nodes.map(menuItem => {
    return (
      <Link
        key={menuItem.id}
        to={menuItem.path}>
        {menuItem.label}
      </Link>
    )
  })

  return (
    <ul>
      {
        menuItems && menuItemsList
      }
    </ul>
  )
}

export default MainNav;
