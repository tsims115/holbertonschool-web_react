import { shallow } from 'enzyme';
import Notifications from './Notifications.js';
import React from 'react';
const expect = require('chai').expect;

describe('<Notifications />', () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });
  it("App renders a div with class App-Header", () => {
    const notificationsComponent = shallow(<Notifications />);
    expect(notificationsComponent.find('li').length).to.equal(3);
  });
  it("App renders a div with class App-Header", () => {
    const notificationsComponent = shallow(<Notifications />);
    expect(notificationsComponent.contains('Here is the list of notifications')).to.equal(true);
  });

});
