import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
const expect = require('chai').expect;

describe('<App />', () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
  it("App renders a div with class App-Header", () => {
    const appComponent = shallow(<App />);
    expect(appComponent.find('.App-header').length).to.equal(1);
  });
  it("App renders a div with class App-body", () => {
    const appComponent = shallow(<App />);
    expect(appComponent.find('.App-body').length).to.equal(1);
  });
  it("App renders a div with class App-footer", () => {
    const appComponent = shallow(<App />);
    expect(appComponent.find('.App-footer').length).to.equal(1);
  });
});
