const getListStudentIds = (sArray) => {
  if (!Array.isArray(sArray)) {
    return [];
  }
  return sArray.map((studentId) => studentId.id);
};

export default getListStudentIds;
