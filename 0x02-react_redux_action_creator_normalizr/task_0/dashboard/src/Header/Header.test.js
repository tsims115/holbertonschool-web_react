import Header from './Header'
import { shallow, mount } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import userContext from '../App/AppContext';


describe('<Header />', () => {
  let contextValues = {};
  beforeEach(() => {
    contextValues = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: () => {}
    };
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("renders Header without crashing", () => {
    mount(<Header />, {
        wrappingComponent: userContext.Provider,
        wrappingComponentProps: {
          value: {
            user: contextValues.user,
            logOut: contextValues.logOut
          },
        },
      });
  });
  it("renders img tag", () => {
    contextValues.user.isLoggedIn = true;
    const SHeader = mount(<Header />, {
      wrappingComponent: userContext.Provider,
      wrappingComponentProps: {
        value: {
          user: contextValues.user,
          logOut: contextValues.logOut
        },
      },
    });
    expect(SHeader.find('header img').length).toEqual(1);
  });
  it("renders h1 tag", () => {
    contextValues.user.isLoggedIn = true;
    const SHeader = mount(<Header />, {
      wrappingComponent: userContext.Provider,
      wrappingComponentProps: {
        value: {
          user: contextValues.user,
          logOut: contextValues.logOut
        },
      },
    });
    expect(SHeader.find('header h1').length).toEqual(1);
  });
  it("Does not render logoutSection with default context values", () => {
    const SHeader = mount(<Header />, {
      wrappingComponent: userContext.Provider,
      wrappingComponentProps: {
        value: {
          user: contextValues.user,
          logOut: contextValues.logOut
        },
      },
    });
    expect(SHeader.find('#logoutSection').length).toEqual(0);
  });
  it("Renders logoutSection with isLoggedIn true in context values", () => {
    contextValues.user.isLoggedIn = true;
    const SHeader = mount(<Header />, {
      wrappingComponent: userContext.Provider,
      wrappingComponentProps: {
        value: {
          user: contextValues.user,
          logOut: contextValues.logOut
        },
      },
    });
    expect(SHeader.find('#logoutSection').length).toEqual(1);
  });
  it("logOut function is called when clicking on link", () => {
    contextValues.user.isLoggedIn = true;
    contextValues.logOut = jest.fn();
    const SHeader = mount(<Header />, {
      wrappingComponent: userContext.Provider,
      wrappingComponentProps: {
        value: {
          user: contextValues.user,
          logOut: contextValues.logOut
        },
      },
    });
    SHeader.find('#logoutSection a').simulate('click');
    expect(contextValues.logOut).toHaveBeenCalled;
  });
});
