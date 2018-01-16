/*import { Router } from 'domr-a';*/
import { Router } from './Domr2/source/';
import routes from './routes';

const router = new Router(routes);

router.showRoutes();
router.start();

