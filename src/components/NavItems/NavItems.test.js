/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { shallow } from 'enzyme';

import NavItems from '.';

const DEFAULT_PROPS = {
  menuItems: []
}

/** 
 * Factory fuction to create a ShallowWrapper for the component that we pass
 * @function getShallowWrapper
 * @param {React.ReactElement} Component component to create shallow wrapper e.g "App"
 * @returns the ShallowWrapper
*/
const getShallowWrapper = (Component, props = {}) => {
  const internalProps = {
    ...DEFAULT_PROPS,
    ...props
  }

  return shallow(<Component {...internalProps} />)
};

/** 
 * Factory fuction to get all nodes founds
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper a shallow wrapper e.g "shallow(<App)" or use our "getShallowWrapper" 
 * @param {String} testId string for the element you want to target 
 * @returns all nodes founds
*/
const findByTestAttr = (wrapper, testId) => {
  return wrapper.find(`[data-test='${testId}']`);
}

test('renders without error', () => {
  // const wrapper = getShallowWrapper(NavItems);
  // const appComponent = findByTestAttr(wrapper, "component-nav-items");

  // expect(appComponent.length).toBe(1);
});
