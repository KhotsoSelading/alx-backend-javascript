const getStudentIdsSum = (students) => {
  const studentID = students.reduce((acc, value) => acc + value.studentID, 0);

  return studentID;
};

export default getStudentIdsSum;
