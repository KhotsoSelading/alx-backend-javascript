const getStudentIdsSum = (students) => {
  return student.reduce((current, next) => current + next.id, 0);
};

export default getStudentIdsSum;
