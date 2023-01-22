import Footer from './Footer'
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
const expect = require('chai').expect;


describe('<Footer />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("renders Footer without crashing", () => {
    shallow(<Footer />);
  });
  it("renders test 'Copyright' ", () => {
    const SFooter = shallow(<Footer />);
    expect(SFooter.find('footer p').text().includes('Copyright')).to.equal(true)
  });
});
