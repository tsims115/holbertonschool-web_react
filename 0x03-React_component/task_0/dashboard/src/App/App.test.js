import { shallow } from 'enzyme';
import React from 'react';
import App from './App';


describe('<App />', () => {
  it("renders entire App without crashing", () => {
    shallow(<App />);
  });
  it("Contains Notifications Component", () => {
    const SApp = shallow(<App />);
    expect(SApp.find('Notifications').length).toEqual(1);
  });
  it("Contains Header Component", () => {
    const SApp = shallow(<App />);
    expect(SApp.find('Header').length).toEqual(1);
  });
  it("Contains Login Component", () => {
    const SApp = shallow(<App />);
    expect(SApp.find('Login').length).toEqual(1);
  });
  it("Contains Footer Component", () => {
    const SApp = shallow(<App />);
    expect(SApp.find('Footer').length).toEqual(1);
  });
  it("Does not contain CourseList Component", () => {
    const SApp = shallow(<App />);
    expect(SApp.find('CourseList').length).toEqual(0);
  });
  it("Contains CourseList Component when logged in", () => {
    const SApp = shallow(<App isLoggedIn={true} />);
    expect(SApp.find('CourseList').length).toEqual(1);
  });
  it("Does not contain Login Component when logged in", () => {
    const SApp = shallow(<App isLoggedIn={true} />);
    expect(SApp.find('Login').length).toEqual(0);
  });

});
