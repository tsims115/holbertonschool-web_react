import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './App';
import sinon from 'sinon';
import { StyleSheetTestUtils } from 'aphrodite';
jest.useFakeTimers();


window.alert = sinon.spy()


describe('<App />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
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

describe('Keydown event listener works as planned', () => {
  let keydown = {};
  let logout = jest.fn();

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    document.addEventListener = jest.fn((event, cb) => {
          keydown[event] = cb;
        });
  })
  afterEach(function() {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.restoreAllMocks();
  });

  it('alert is called with logging you out', () => {
    window.alert = jest.fn();
    shallow(<App logOut={logout} />);
    keydown.keydown({ key: "h", ctrlKey: true });
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
  });
  
  it('logOut function should be used', () => {
    const logout = jest.fn();
    window.alert = jest.fn();
    shallow(<App logOut={logout} />);
    keydown.keydown({ key: "h", ctrlKey: true });
    expect(logout).toHaveBeenCalled();
  })

})
