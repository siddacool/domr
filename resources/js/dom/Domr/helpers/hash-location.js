import hashLocationSet from './hash-location-set';
import Logger from '../Logger';

const logger = new Logger();

function loc(hash) {
  const originalHash = hash;
  let path = originalHash;
  let search = '';
  let query = '';

  if (path.includes('?')) {
    const searchQuery = path.split('?');
    path = searchQuery[0];
    search = searchQuery[1].replace(/\//g, '');

    if (search !== '') {
      const obj = {};
      const filterString = search.split('&');

      for (let i = 0; i < filterString.length; i++) {
        const splitString = filterString[i].split('=');
        const field = splitString[0];
        const value = splitString[1];

        obj[field] = value;
      }
      query = obj;
    }
  }

  if (path.endsWith('/') && !path.endsWith('#/')) {
    const pathSlice = path.slice(0, -1);

    path = pathSlice.replace('#', '');
  } else {
    path = path.replace('#', '');
  }

  return {
    hash: originalHash.replace('#', ''),
    path,
    search,
    query,
  };
}

const hashLocation = loc(location.hash);
const hashLocationGet = (field) => {
  const hash = hashLocation;
  const thisField = hash[field];

  if (thisField) {
    return hash[field];
  } else {
    logger.error('incorrect get location params');
  }
};

hashLocation.set = hashLocationSet;
hashLocation.get = hashLocationGet;

export default hashLocation;
