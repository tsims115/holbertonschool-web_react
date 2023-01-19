import Login from './Login'
import { shallow } from 'enzyme';
import React from 'react';
const expect = require('chai').expect;
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Login />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("renders Login without crashing", () => {
    shallow(<Login />);
  });
  it("renders 2 labels", () => {
    const SLogin = shallow(<Login />);
    expect(SLogin.find('label').length).to.equal(2);
  });
  it("renders 2 inputs", () => {
    const SLogin = shallow(<Login />);
    expect(SLogin.find('input').length).to.equal(2);
  });
});
