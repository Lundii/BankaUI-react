// describe('String', () => {
//   it('Display welcome banka', () => {
//     expect('Welcome to Banka').toBe('Welcome to Banka');
//   });
// });

import HomePage from '../components/HomePage';
import NavBar from '../components/HomePage/navigationbar'

it("renders correctly", () => {
  const wrapper = mount(<HomePage />);
  console.log(wrapper.find('NavBar').debug());
  // expect(wrapper.find('NavBar')).to.have.length(1);
  // expect(wrapper.find('HomeBody')).to.have.lengthOf(1);
  
})