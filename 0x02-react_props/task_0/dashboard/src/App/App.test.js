import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
const expect = require('chai').expect;

describe('<App />', () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
  
});
