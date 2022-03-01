import React from 'react';
import { Link } from 'gatsby';

import { useRecoilState } from 'recoil';
import { pageCountState } from '../../recoil/atoms';

const NavItems = ({ menuItems }) => {
  const [count, setCount] = useRecoilState(pageCountState);

  const menuItemsList = menuItems.map(menuItem => {
    return (
      <Link
        key={menuItem.id}
        to={menuItem.path}
        onClick={() => setCount(count + 1)}>
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
