import CourseList from "./CourseList";
import { shallow } from 'enzyme';
import React from 'react';


describe('<CourseListRow />', () => {
  it("renders CourseListRow without crashing", () => {
    shallow(<CourseList />);
  });
  it("renders 3 rows when given nothing", () => {
    const SCourseList = shallow(<CourseList />);
    expect(SCourseList.find('CourseListRow').length).toEqual(3);
  });
  it("renders 3 rows when given a course", () => {
    const SCourseList = shallow(<CourseList listCourses={[{id: 2, name: 'React', credit:68}]} />);
    expect(SCourseList.find('CourseListRow').length).toEqual(3);
  });
});
