import Header from './Header'
import { shallow } from 'enzyme';
import React from 'react';
const expect = require('chai').expect;

describe('<Header />', () => {
  it("renders Header without crashing", () => {
    shallow(<Header />);
  });
  it("renders img tag", () => {
    const SHeader = shallow(<Header />);
    expect(SHeader.find('.App-header img').length).to.equal(1);
  });
  it("renders h1 tag", () => {
    const SHeader = shallow(<Header />);
    expect(SHeader.find('.App-header h1').length).to.equal(1);
  });
});
