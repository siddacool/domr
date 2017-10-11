function dynamicRouteLoc(field) {
  const hash = location.hash;
  const fieldDemo = `/${field}/`;
  if (hash.includes(fieldDemo)) {
    return hash.substring(hash.indexOf(fieldDemo)).replace(fieldDemo, '');
  }
}

export default dynamicRouteLoc;
