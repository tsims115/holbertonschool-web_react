import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem.js';
import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite';


describe('<NotificationItem />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("renders without crashing", () => {
    shallow(<NotificationItem />);
  });
  it("renders type and value", () => {
    const SNotificationItem = shallow(<NotificationItem type='TrentType'  value='value' />);
    expect(SNotificationItem.find('li').text().includes('value')).toEqual(true);
  });
  it("renders html data", () => {
    const SNotificationItem = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(SNotificationItem.render().find('u').text()).toEqual('test');
  });
});

describe('<NotificationItem /> ', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.resetAllMocks()
  });

  it("The correct ", () => {
    const SNotificationItem = shallow(
      <NotificationItem type='default' value='test' id={1} />
    );
    const inst = SNotificationItem.instance();
    inst.markAsRead = () => {};
    const spy = jest.spyOn(inst, 'markAsRead')
    SNotificationItem.simulate('click');
    inst.markAsRead(1);
    expect(inst.markAsRead).toHaveBeenCalledWith(1);
    expect(spy).toHaveBeenCalledWith(1);
  });
});
