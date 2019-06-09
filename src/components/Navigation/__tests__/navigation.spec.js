import React from 'react';
import { shallow ,mount} from 'enzyme';

import Navigation from '../navigation'

const props = {
  classes : {
    openSideNav: "a",
    sideNav:"b"
  },
  getTitleCategory : jest.fn(),
  setPrevCategory : jest.fn(),
  toggleDrawer : jest.fn(),
  prevCategory: [],
}
describe('Navigation', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
      <Navigation
        {...props}
        />
    ).dive();
    //console.log(wrapper.debug())
  });
  it('should have  `aside` ', () => {

    expect(wrapper.find('aside').length)
    .toBe(1);

  });
  it('should have the Component `NavQuery` ', () => {

    expect(wrapper.exists('NavQuery'))
    .toEqual(true);

  });
  it('should have the `prevCategory` "Is array"', () => {
    const NavQuery = wrapper.find("NavQuery").prop('prevCategory');
    expect(NavQuery)
    .toEqual([])
  });

})
