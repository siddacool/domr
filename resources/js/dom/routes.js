import Examples from './views/Examples';
import CheckList from './views/CheckList';
import DynamicRouteName from './views/DynamicRouteName';
import Counter from './views/Counter';
import TreeView from './views/TreeView';
import TvSearchView from './views/TvSearchView';
import Test from './views/Test';

const routes = [
  {
    name: 'index',
    path: '/',
    view: Examples,
    pageTitle: 'Domr Examples',
    isDefault: true,
  },
  {
    name: 'list',
    path: '/list',
    view: CheckList,
  },
  {
    name: 'Counter',
    path: '/counter',
    view: Counter,
  },
  {
    name: 'Dynamic Route',
    path: '/name/:name',
    psudoPath: '/name/arya',
    view: DynamicRouteName,
    isDynamic: true,
  },
  {
    name: 'Test',
    path: '/?min=:min&max=:max',
    psudoPath: '/?min=50&max=60',
    view: Test,
    isDynamic: true,
  },
  {
    name: 'Tree',
    path: '/tree',
    view: TreeView,
  },
  {
    name: 'Tv Shows AJAX Search',
    path: '/tvshows/',
    view: TvSearchView,
  },
];

export default routes;
