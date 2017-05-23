import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../loading/loading';

it('renders a loading message', () => {
  const wrapper = shallow(<Loading />);
  const loading = <h2>Loading..</h2>;

  expect(wrapper.contains(loading)).toEqual(true);
});
