import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import BodySection from './BodySection';


describe('<BodySection />', () => {
  it("renders BodySection", () => {
    shallow(<BodySection title='' />);
  });
  it("renders BodySection with child element", () => {
    const sBodySection = shallow(
    <BodySection title='This is the title' >
      <p>Test children node</p>
    </BodySection>);
    expect(sBodySection.find('p').length).toEqual(1);
  });
  it("renders BodySection with correct child element text", () => {
    const sBodySection = shallow(
    <BodySection title='This is the title' >
      <p>Test children node</p>
    </BodySection>);
    expect(sBodySection.find('p').first().text()).toEqual('Test children node');
  });
  it("renders BodySection with h2 element", () => {
    const sBodySection = shallow(
    <BodySection title='This is the title' >
      <p>Test children node</p>
    </BodySection>);
    expect(sBodySection.find('h2').length).toEqual(1);
  });
  it("renders BodySection with correct h2 text", () => {
    const sBodySection = shallow(
    <BodySection title='This is the title' >
      <p>Test children node</p>
    </BodySection>);
    expect(sBodySection.find('h2').first().text()).toEqual('This is the title');
  });
});
