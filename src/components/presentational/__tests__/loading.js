import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../loading/loading';

it('renders a loading indicator', () => {
  const wrapper = shallow(<Loading />);

  expect(wrapper.find('.loading').exists()).toEqual(true);
});
