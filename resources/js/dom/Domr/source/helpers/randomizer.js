function randomizer(stringLength = 7) {
  return Math.random().toString(36).substr(2, stringLength);
}

export default randomizer;
