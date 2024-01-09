const getStudentIdsSum = (students) => {
  const studentID = students.reduce((acc, value) => acc + value.id, 0);
  return studentID;
};

export default getStudentIdsSum;
