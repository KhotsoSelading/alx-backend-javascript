const cleanSet = (set, startString) => {
  if (!startString) {
    return '';
  }

  return [...set]
    .filter((parametro) => parametro && parametro.startsWith(startString))
    .map((parametro) => parametro.slice(startString.length))
    .join('-');
};

export default cleanSet;
