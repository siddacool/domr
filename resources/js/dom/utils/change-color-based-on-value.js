function changeColor(val) {
  const value = val;

  if (value > 0) {
    return 'green';
  } else if (value < 0) {
    return 'red';
  }

  return 'blue';
}

export default changeColor;
