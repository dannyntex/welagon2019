import React from 'react';
import { shallow ,mount} from 'enzyme';

import AppBarFooter from '../appbarfooter'

const mockProps = {
  drawer : '',
  ToggleNav: jest.fn(),
  classes:{
    root:'root',
    hamburger: 'hamburger',
    close:'close'
  }

}
describe('AppBarFooter', () =>{
  let wrapper;
  const onHandleToggleMenu = jest.fn();
  beforeEach(()=>{
    wrapper = shallow(
      <AppBarFooter  {...mockProps} onHandleToggleMenu={onHandleToggleMenu} />
    )
    onHandleToggleMenu('nav',null)
  })
  it('should display icon menu',()=>{
    expect(
      wrapper.dive().find('label').length
    ).toBe(1)
  })
  it('should display the hamburger select',()=>{
    expect(
      wrapper.dive().find('.hamburger').length
    ).toBe(1)
  })
  describe('then user clicks menu hamburger',()=>{
    beforeEach(()=>{
      wrapper.setProps({ drawer: 'nav' });
      const buttonLabel = wrapper.dive().find('label');
      buttonLabel.simulate('click');
    })
    it('should call prop `onHandleToggleMenu` with `drawer`',()=>{
      expect(
        onHandleToggleMenu.mock.calls[0]
      )
    })
    it('should display icon close',()=>{
      expect(
        wrapper.dive().find('.close').length
      ).toBe(1)

    })
  })

})
