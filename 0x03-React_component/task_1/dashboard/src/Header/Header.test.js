import Header from './Header'
import { shallow } from 'enzyme';
import React from 'react';
const expect = require('chai').expect;
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Header />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("renders Header without crashing", () => {
    shallow(<Header />);
  });
  it("renders img tag", () => {
    const SHeader = shallow(<Header />);
    expect(SHeader.find('header img').length).to.equal(1);
  });
  it("renders h1 tag", () => {
    const SHeader = shallow(<Header />);
    expect(SHeader.find('header h1').length).to.equal(1);
  });
});
