import Header from './Header'
import { shallow } from 'enzyme';
import React from 'react';

describe('<Header />', () => {
  it("renders Header without crashing", () => {
    shallow(<Header />);
  });
  it("renders img tag", () => {
    const SHeader = shallow(<Header />);
    expect(SHeader.find('.App-header img').length).toEqual(1);
  });
  it("renders h1 tag", () => {
    const SHeader = shallow(<Header />);
    expect(SHeader.find('.App-header h1').length).toEqual(1);
  });
});
