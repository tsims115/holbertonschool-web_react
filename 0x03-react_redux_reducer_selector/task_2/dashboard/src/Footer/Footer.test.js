import Footer from './Footer'
import { shallow, mount } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import userContext from '../App/AppContext';


describe('<Footer />', () => {
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
  it("renders Footer without crashing", () => {
    shallow(<Footer />);
  });
  it("renders test 'Copyright' ", () => {
    const SFooter = shallow(<Footer />);
    expect(SFooter.find('footer p').text().includes('Copyright')).toEqual(true)
  });
  it("renders 'Contact us' when logged in", () => {
    contextValues.user.isLoggedIn = true;
    const SFooter = mount(<Footer />, {
      wrappingComponent: userContext.Provider,
      wrappingComponentProps: {
        value: {
          user: contextValues.user,
          logOut: contextValues.logOut
        },
      },
    });
    expect(SFooter.find('footer p').first().text().includes('Contact us')).toEqual(true)
  });
  it("Does not renders 'Contact us' when not logged in", () => {
    const SFooter = mount(<Footer />, {
      wrappingComponent: userContext.Provider,
      wrappingComponentProps: {
        value: {
          user: contextValues.user,
          logOut: contextValues.logOut
        },
      },
    });
    expect(SFooter.find('p').length).toEqual(1)
  });
});
