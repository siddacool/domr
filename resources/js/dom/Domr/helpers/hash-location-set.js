import hashLocationDynamic from './hash-location-dynamic';
import Logger from '../Logger';

const logger = new Logger();

function setHash(option) {
  let hash = option;
  if (!hash.startsWith('#')) {
    hash = `#${hash}`;
  }

  return hash;
}

function setPath(option) {
  const loc = hashLocationDynamic();
  const searchQuery = loc.search;
  let path = option;

  if (path.startsWith('#')) {
    path = path.slice(0, -1);
  }

  if (searchQuery) {
    if (!path.endsWith('/')) {
      path = `${path}/`;
    }

    path = `${path}?${searchQuery}`;
  }

  path = setHash(path);
  return path;
}

function setSearch(option) {
  let search = option;
  const loc = hashLocationDynamic();
  let path = loc.path;

  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  if (!search.startsWith('?')) {
    search = `?${search}`;
  }

  search = setHash(`${path}/${search}`);

  return search;
}

function loopSearchQuery(obj) {
  const arr = [];
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`);
  }

  return `?${arr.join('&')}`;
}

function setQuery(obj) {
  const searchQuery = loopSearchQuery(obj);
  const query = setSearch(searchQuery);

  return query;
}

function redirectTo(hash) {
  location.hash = hash;
}


function hashLocationSet(field, opt) {
  const setField = field;
  const option = opt;
  let link;

  switch (setField) {
    case 'search':
      link = setSearch(option);
      break;
    case 'query':
      link = setQuery(option);
      break;
    case 'path':
      link = setPath(option);
      break;
    case 'hash':
      link = setHash(option);
      break;
  }

  if (link) {
    redirectTo(link);
  } else {
    logger.error('incorrect set location params');
  }
}

export default hashLocationSet;
