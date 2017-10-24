function loopArr(origin, obj) {
  const arr = [];
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`);
  }

  return `${origin}?${arr.join('&')}`;
}

function locSearchChange(obj) {
  let loc = location.href;
  if (loc.includes('?')) {
    const splitLoc = loc.split('?');
    loc = splitLoc[0];
  }
  const locHash = loopArr(loc, obj);

  location.href = locHash;
}

export default locSearchChange;
