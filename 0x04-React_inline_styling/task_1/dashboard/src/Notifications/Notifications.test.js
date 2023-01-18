import { shallow } from 'enzyme';
import Notifications from './Notifications.js';
import React from 'react';
import {expect, jest, test} from '@jest/globals';
import { StyleSheetTestUtils } from 'aphrodite';




describe('<Notifications />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  let listNotifications = [{
    value: 'Someone wants to connect!',
    id: 0,
    type: 'default',
    },
    {
    value: 'Employer wants to reach out',
    id: 1,
    type: 'urgent',
    },
    {
    value: '',
    id: 2,
    type: 'urgent',
    html: {__html: 'This is a string'}
    }
  ]
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });
  it("Notification renders 3 NotificationItems when given list", () => {
    const notificationsComponent = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(notificationsComponent.find('NotificationItem').length).toEqual(3);
  });
  it("Notification renders a correct header text", () => {
    const SComponent = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    expect(SComponent.find('div p').text()).toEqual('Here is the list of notifications');
  });
  it("Notification renders menuItem div", () => {
    const SComponent = shallow(<Notifications />);
    expect(SComponent.find('.menuItem').length).toEqual(1);
  });
  it("Does not display div.Notifications when display drawer is false", () => {
    const SComponent = shallow(<Notifications />);
    expect(SComponent.find('div p').length).toEqual(0);
  });
  it("Displays div.Notifications when display drawer is true", () => {
    const SComponent = shallow(<Notifications displayDrawer={true} />);
    expect(SComponent.find('div p').length).toEqual(1);
  });

});

describe('<Notifications /> when given a list of notifications', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  let listNotifications = [
    {
    value: 'Someone wants to connect!',
    id: 0,
    type: 'default',
    },
    {
    value: 'Employer wants to reach out',
    id: 1,
    type: 'urgent',
    },
    {
    value: '',
    id: 2,
    type: 'urgent',
    html: {__html: 'This is a string'}
    },
  ]
const SComponent = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

  it("Displays div.Notifications when display drawer is true", () => {
    expect(SComponent.find('NotificationItem').length).toEqual(3);
  });
});

describe('<Notifications /> when given a list of notifications and markAsRead function', () => {
  let listNotifications = [
    {
    value: 'Someone wants to connect!',
    id: 0,
    type: 'default',
    },
    {
    value: 'Employer wants to reach out',
    id: 1,
    type: 'urgent',
    },
    {
    value: '',
    id: 2,
    type: 'urgent',
    html: {__html: 'This is a string'}
    },
  ]
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.restoreAllMocks()
  });

  it("The correct console.log message i written when markAsRead is called", () => {
    console.log = jest.fn();
    const SNotifications = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />).instance();
    SNotifications.markAsRead(1);
    expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read')
  });
});

describe('<Notifications /> updates when given a list bigger than original', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.restoreAllMocks()
  });

  it("should not render with list same size", () => {
    let listNotifications = [
    {
      value: 'Someone wants to connect!',
      id: 0,
      type: 'default',
      }
  ]
    const SNotifications = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    SNotifications.setProps({ listNotifications: listNotifications });
    expect(shouldComponentUpdateSpy).toHaveBeenCalled();
    expect(shouldComponentUpdateSpy).toHaveLastReturnedWith(false);
  });
  it("should rerender with list bigger", () => {
    let listNotifications = [
    {
      value: 'Someone wants to connect!',
      id: 0,
      type: 'default',
      }
  ]
    const SNotifications = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    listNotifications = [
      {
        value: 'Someone wants to connect!',
        id: 0,
        type: 'default',
      },
      {
        value: 'Resume available!',
        id: 1,
        type: 'urgent',
      }
    ]
    SNotifications.setProps({ listNotifications: listNotifications });
    expect(shouldComponentUpdateSpy).toHaveBeenCalled();
    expect(shouldComponentUpdateSpy).toHaveLastReturnedWith(true);
  });
});
