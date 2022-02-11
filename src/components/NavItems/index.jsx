import React from 'react';

const NavItems = ({ menuItems }) => {
  const menuItemsList = menuItems.map(menuItem => {
    return (
      <Link
        key={menuItem.id}
        to={menuItem.path}>
        {menuItem.label}
      </Link>
    )
  })

  return (
    <ul data-test="component-nav-items">
      {
        menuItemsList
      }
    </ul>
  )
}

export default NavItems;