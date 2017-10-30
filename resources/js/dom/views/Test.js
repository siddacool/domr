import { Logger } from '../Domr';

const logger = new Logger('Dynamic Routes 2');

export default function (data) {
  const wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = '<h2>Check browser console</h2>';
  logger.info(data, '');
}
