import hashLocation from './hash-location';

function loopArr(obj) {
  const arr = [];
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`);
  }

  return `?${arr.join('&')}`;
}

function setSearchQuery(queryObj) {
  const path = hashLocation.path;
  const searchQuery = loopArr(queryObj);

  location.hash = `#${path}/${searchQuery}`;
}

export default setSearchQuery;
