import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem.js';
import React from 'react';
const expect = require('chai').expect;

describe('<NotificationItem />', () => {
  it("renders without crashing", () => {
    shallow(<NotificationItem />);
  });
  it("renders type and value", () => {
    const SNotificationItem = shallow(<NotificationItem type='TrentType'  value='value' />);
    expect(SNotificationItem.find('li').text().includes('value')).to.equal(true);
  });
  it("renders html data", () => {
    const SNotificationItem = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(SNotificationItem.render().find('u').text()).to.equal('test');
  });

});
