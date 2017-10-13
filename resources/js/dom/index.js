import Domr from './Domr';
import routes from './routes';

const Router = Domr.Router;

const router = new Router(routes, {
  routeData: true,
});

router.set();

