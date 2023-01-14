import Footer from './Footer'
import { shallow } from 'enzyme';
import React from 'react';
const expect = require('chai').expect;

describe('<Footer />', () => {
  it("renders Footer without crashing", () => {
    shallow(<Footer />);
  });
  it("renders test 'Copyright' ", () => {
    const SFooter = shallow(<Footer />);
    expect(SFooter.find('footer p').text().includes('Copyright')).to.equal(true)
  });
});
