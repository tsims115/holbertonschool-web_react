import Footer from './Footer'
import { shallow } from 'enzyme';
import React from 'react';

describe('<Footer />', () => {
  it("renders Footer without crashing", () => {
    shallow(<Footer />);
  });
  it("renders test 'Copyright' ", () => {
    const SFooter = shallow(<Footer />);
    expect(SFooter.find('footer p').text().includes('Copyright')).toEqual(true)
  });
});
