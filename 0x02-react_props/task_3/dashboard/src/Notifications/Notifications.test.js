import { shallow } from 'enzyme';
import Notifications from './Notifications.js';
import React from 'react';
const expect = require('chai').expect;

describe('<Notifications />', () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });
  it("Notification renders 3 NotificationItems", () => {
    const notificationsComponent = shallow(<Notifications />);
    expect(notificationsComponent.find('NotificationItem').length).to.equal(3);
  });
  it("Notification renders a correct header text", () => {
    const SComponent = shallow(<Notifications />);
    expect(SComponent.contains('Here is the list of notifications')).to.equal(true);
  });

});
