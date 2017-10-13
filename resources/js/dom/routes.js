import dynamicRouteLoc from './utils/dynamic-route-loc';
import Examples from './views/Examples';
import CheckList from './views/CheckList';
import DynamicRouteName from './views/DynamicRouteName';
import Counter from './views/Counter';
import TreeView from './views/TreeView';
import TvSearchView from './views/TvSearchView';
import DynamicRouteLocation from './Domr/DynamicRouteLocation';
import Test from './views/Test';
import pathMaker from './path-maker';

const nameDemo = dynamicRouteLoc('name') || 'arya_stark';
const bla = DynamicRouteLocation('/name/', '/boo/') || 'arya_stark';
const boo = DynamicRouteLocation('/boo/', '?stat=') || 'arya_stark';
const stat = DynamicRouteLocation('?stat=') || 'arya_stark';

console.log(bla);
/*pathMaker();*/

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
    path: `/name/${bla}/boo/${boo}`,
    view: DynamicRouteName,
    pageTitle: `Hello ${bla}`,
  },
  {
    name: 'Dynamic Route',
    path: `/name/${bla}/boo/${boo}?stat=${stat}`,
    view: DynamicRouteName,
    pageTitle: `meh ${bla} meh`,
  },
  {
    name: 'Counter',
    path: '/counter',
    view: Counter,
  },
  {
    name: 'Test',
    path: '/test/{test}',
    view: pathMaker('/test/{test}/app/{app}'),
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
