import Domr from './Domr';
import routes from './routes';

const Router = Domr.Router;

const router = new Router(routes, {
  redirectDefault: true,
});

router.start();

