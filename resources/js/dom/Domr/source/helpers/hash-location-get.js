import hashLocation from './hash-location';
import Logger from '../Logger';

const logger = new Logger();

function hashLocationGet(field) {
  const loc = hashLocation();
  const thisField = loc[field];

  if (thisField) {
    return thisField;
  } else {
    logger.error('incorrect get location params');
  }
}

export default hashLocationGet;

