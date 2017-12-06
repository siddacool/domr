import Examples from './views/Examples';
import CheckList from './views/CheckList';
import DynamicRouteName from './views/DynamicRouteName';
import Counter from './views/Counter';
import TreeView from './views/TreeView';
import TvSearchView from './views/TvSearchView';
import Test from './views/Test';
import Error404 from './views/Error404';

const routes = [
  {
    path: '/',
    view: Examples,
    pageTitle: 'Domr Examples',
  },
  {
    name: 'list',
    path: '/list/',
    view: CheckList,
  },
  {
    name: 'Counter',
    path: '/counter/',
    view: Counter,
  },
  {
    name: 'Say My Name',
    path: '/got/:house/',
    psudoPath: '/got/stark/?name=arya&alias=no_one',
    view: DynamicRouteName,
  },
  {
    name: 'Dynamic Routes',
    path: '/droute2/',
    psudoPath: '/droute2/?min=50&max=60',
    view: Test,
  },
  {
    name: 'Tree',
    path: '/tree/',
    view: TreeView,
  },
  {
    name: 'Tv Shows AJAX Search',
    path: '/tvshows/',
    view: TvSearchView,
  },
  {
    path: '/404',
    view: Error404,
    isDefault: true,
  },
  {
    name: 'External',
    href: 'https://siddacool.github.io/tv-shows/',
  },
];

export default routes;
