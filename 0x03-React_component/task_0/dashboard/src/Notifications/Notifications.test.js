import { shallow } from 'enzyme';
import Notifications from './Notifications.js';
import React from 'react';


const listNotifications = [
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

describe('<Notifications />', () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });
  it("Notification renders 3 NotificationItems when given list", () => {
    const notificationsComponent = shallow(<Notifications listNotifications={listNotifications} />);
    expect(notificationsComponent.find('NotificationItem').length).toEqual(3);
  });
  it("Notification renders a correct header text", () => {
    const SComponent = shallow(<Notifications />);
    expect(SComponent.contains('Here is the list of notifications')).toEqual(true);
  });
  it("Notification renders menuItem div", () => {
    const SComponent = shallow(<Notifications />);
    expect(SComponent.find('.menuItem').length).toEqual(1);
  });
  it("Does not display div.Notifications when display drawer is false", () => {
    const SComponent = shallow(<Notifications />);
    expect(SComponent.find('.Notifications').props()['style']).toEqual({display: "none"});
  });
  it("Displays div.Notifications when display drawer is true", () => {
    const SComponent = shallow(<Notifications displayDrawer={true} />);
    expect(SComponent.find('.Notifications').props()['style']).toEqual({display: "block"});
  });

});

describe('<Notifications /> when given a list of notifications', () => {
  const listNotifications = [
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