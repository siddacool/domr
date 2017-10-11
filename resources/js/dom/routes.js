import dynamicRouteLoc from './utils/dynamic-route-loc';
import Examples from './views/Examples';
import CheckList from './views/CheckList';
import DynamicRouteName from './views/DynamicRouteName';
import Counter from './views/Counter';
import TreeView from './views/TreeView';
import TvSearchView from './views/TvSearchView';

const nameDemo = dynamicRouteLoc('name') || 'arya_stark';

const routes = [
  {
    name: 'index',
    path: '/',
    view: Examples,
    isDefault: true,
    pageTitle: 'Domr Examples',
  },
  {
    name: 'list',
    path: '/list',
    view: CheckList,
  },
  {
    name: 'Dynamic Route',
    path: `/name/${nameDemo}`,
    view: DynamicRouteName,
    pageTitle: `Hello ${nameDemo}`,
  },
  {
    name: 'Counter',
    path: '/counter',
    view: Counter,
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
