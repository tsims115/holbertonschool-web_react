import Login from './Login'
import { shallow } from 'enzyme';
import React from 'react';

describe('<Login />', () => {
  it("renders Login without crashing", () => {
    shallow(<Login />);
  });
  it("renders 2 labels", () => {
    const SLogin = shallow(<Login />);
    expect(SLogin.find('label').length).toEqual(2);
  });
  it("renders 2 inputs", () => {
    const SLogin = shallow(<Login />);
    expect(SLogin.find('input').length).toEqual(2);
  });
});
