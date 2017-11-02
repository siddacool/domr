import { Router } from 'domr-a';
import routes from './routes';

const router = new Router(routes, {
  redirectDefault: true,
});

router.start();

