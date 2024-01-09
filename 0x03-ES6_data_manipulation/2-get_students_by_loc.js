const getStudentsByLocation = (students, city) => {
  const objArray = students.filter((funtion) => funtion.location === city);

  return objArray;
};

export default getStudentsByLocation;
