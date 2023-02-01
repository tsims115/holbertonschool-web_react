import { shallow, mount } from 'enzyme';
import React from 'react';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  })
  it("console.log was called on mount", () => {
    console.log = jest.fn();
    const WrappedComponent = WithLogging(() => <div />);
    const mountedWrapped = mount(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
    mountedWrapped.unmount();
  });
  it("console.log was called on unmount", () => {
    console.log = jest.fn();
    const WrappedComponent = WithLogging(() => <div />);
    mount(<WrappedComponent />).unmount();
    expect(console.log).toHaveBeenNthCalledWith(2, 'Component Component is going to unmount');
    
  });
});
