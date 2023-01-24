import { Seq } from 'immutable';

function printBestStudents(obj) {
  const student = Seq(obj).filter((v) => v.score > 70).toJS();
  let firstName;
  let lastName;

  Object.keys(student).map((key) => {
    firstName = student[key].firstName;
    lastName = student[key].lastName;
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    student[key].firstName = firstName;
    student[key].lastName = lastName;
    return 1;
  });
  console.log(student);
}

export default printBestStudents;
