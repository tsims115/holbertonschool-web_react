import CourseListRow from "./CourseListRow";
import { shallow } from 'enzyme';
import React from 'react';

describe('<CourseListRow />', () => {
  it("renders CourseListRow without crashing", () => {
    shallow(<CourseListRow textFirstCell="This is first Cell"/>);
  });
  it("isHeader true and textSecondCell is null: renders one cell", () => {
    const SCourseListRow = shallow(<CourseListRow isHeader={true} textFirstCell="This is first Cell"/>);
    expect(SCourseListRow.find('th').length).toEqual(1);
  });
  it("isHeader true and textSecondCell is null: cell has colSpan of 2", () => {
    const SCourseListRow = shallow(<CourseListRow isHeader={true} textFirstCell="This is first Cell"/>);
    expect(SCourseListRow.find('th').props()['colSpan']).toEqual(2);
  });
  it("isHeader true and textSecondCell is not null: renders two cells", () => {
    const SCourseListRow = shallow(<CourseListRow isHeader={true} textFirstCell="This is first Cell" textSecondCell="This is second Cell" />);
    expect(SCourseListRow.find('th').length).toEqual(2);
  });
  it("isHeader true and textSecondCell is not null: First Cell Correct Text", () => {
    const SCourseListRow = shallow(<CourseListRow isHeader={true} textFirstCell="This is first Cell" textSecondCell="This is second Cell"/>);
    expect(SCourseListRow.find('th').at(0).text()).toEqual('This is first Cell');
  });
  it("isHeader true and textSecondCell is not null: Second Cell Correct Text", () => {
    const SCourseListRow = shallow(<CourseListRow isHeader={true} textFirstCell="This is first Cell" textSecondCell="This is second Cell"/>);
    expect(SCourseListRow.find('th').at(1).text()).toEqual('This is second Cell');
  });
  it("isHeader false: renders two td elements in tr", () => {
    const SCourseListRow = shallow(<CourseListRow isHeader={false} textFirstCell="This is first Cell" textSecondCell="This is second Cell"/>);
    expect(SCourseListRow.find('tr td').length).toEqual(2);
  });
  it("isHeader false: FirstCell text is correct", () => {
    const SCourseListRow = shallow(<CourseListRow isHeader={false} textFirstCell="This is first Cell" textSecondCell="This is second Cell"/>);
    expect(SCourseListRow.find('tr td').at(0).text()).toEqual('This is first Cell');
  });
  it("isHeader false: SecondCell text is correct", () => {
    const SCourseListRow = shallow(<CourseListRow isHeader={false} textFirstCell="This is first Cell" textSecondCell="This is second Cell"/>);
    expect(SCourseListRow.find('tr td').at(1).text()).toEqual('This is second Cell');
  });
});
