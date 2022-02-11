/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { shallow } from 'enzyme';

import Healine from ".";

const getShallowWrapper = (Component) => shallow(<Component />);

const findByTestAttr = (wrapper, testId) => {
  return wrapper.find(`[data-test='${testId}']`);
}

test('renders without error', () => {
  const wrapper = getShallowWrapper(Healine);
  const headlineComponent = findByTestAttr(wrapper, "component-headline");

  expect(headlineComponent.length).toBe(1);
});
