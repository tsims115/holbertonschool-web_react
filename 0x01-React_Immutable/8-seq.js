import { Seq } from 'immutable';

function printBestStudents(obj) {
  const sequence = Seq(obj);
  let student = sequence.filter((value) => value.score > 70);
  let firstName;
  let lastName;

  student = student.toJS();
  Object.keys(student).map((key) => {
    firstName = student[key].firstName;
    firstName = firstName.charAt(0).toUpperCase() + firstName.splice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.splice(1);
    student[key].firstName = firstName;
    student[key].lastName = lastName;
    return student[key];
  });
}

export default printBestStudents;
