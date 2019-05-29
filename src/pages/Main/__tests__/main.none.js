// import React from 'react';
// import { shallow ,mount} from 'enzyme';
//
//
// import Main from '../main'
//
// //import AppBarFooter from 'src/components/AppBarFooter'
//
//
// jest.mock('src/classify');
// jest.mock('src/store');
// class AppBarFooter extends React.Component {
//     render() {return null}
// }
// jest.doMock('src/components/AppBarFooter', () => AppBarFooter);
// describe('main',()=>{
//   let wrapper;
//
// beforeEach(() => {
//
//   wrapper = shallow(
//       <Main   />
//     )
// console.log(wrapper.debug())
// //console.log(wrapper.debug())
// });
// afterEach(()=>{
//
// })
// it('should display header',()=>{
//   expect(
//     wrapper.find('main').legth
//   ).toEqual(1)
// })
// it('should display footer',()=>{
//   expect(
//     wrapper.html()
//   ).toContain(<footer></footer>)
// })
// })
