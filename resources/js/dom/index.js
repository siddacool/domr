import { Router } from './Domr';
import routes from './routes';

const router = new Router(routes, {
  redirectDefault: true,
  clearLog: true,
});

router.start();

