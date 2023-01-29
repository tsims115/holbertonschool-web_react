import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';


describe('<BodySection />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("renders BodySectionWithMarginBottom", () => {
    shallow(<BodySectionWithMarginBottom title='' />);
  });
  it("renders BodySectionWithMarginBottom and BodySection child", () => {
    const sBodySection = shallow(<BodySectionWithMarginBottom title='This is the title' />);
    expect(sBodySection.find('BodySection').length).toEqual(1);
  });
  it("renders BodySectionWithMarginBottom with correct props passed down", () => {
    const sBodySection = shallow(<BodySectionWithMarginBottom title='This is the title' />);
    expect(sBodySection.find('BodySection').props().title).toEqual('This is the title');
  });
});
