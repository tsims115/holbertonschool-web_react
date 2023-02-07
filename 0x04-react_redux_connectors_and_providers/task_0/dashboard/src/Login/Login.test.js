import Login from './Login'
import { shallow } from 'enzyme';
import React from 'react';
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
    expect(SLogin.find('label').length).toEqual(2);
  });
  it("renders 3 inputs", () => {
    const SLogin = shallow(<Login />);
    expect(SLogin.find('input').length).toEqual(3);
  });
});

describe('<Login /> has correct state', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("Login has enableSubmit set to false by default", () => {
    const sLogin = shallow(<Login />);
    expect(sLogin.state().enableSubmit).toEqual(false);
  });
  it("after changing the values the enable submit should be true", () => {
    const sLogin = shallow(<Login />);
    sLogin.find('input').first().simulate('change', { target: { value: 'hel' } });
    sLogin.find('input').at(1).simulate('change', { target: { value: 'hel' } });
    sLogin.find('input').first().simulate('change', { target: { value: 'hello' } });

    expect(sLogin.state().enableSubmit).toEqual(true);
  });
});

