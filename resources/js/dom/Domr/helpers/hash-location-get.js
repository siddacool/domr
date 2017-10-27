import hashLocationDynamic from './hash-location-dynamic';
import Logger from '../Logger';

const logger = new Logger();

function hashLocationGet(field) {
  const loc = hashLocationDynamic();
  const thisField = loc[field];

  if (thisField) {
    return thisField;
  } else {
    logger.error('incorrect get location params');
  }
}

export default hashLocationGet;

