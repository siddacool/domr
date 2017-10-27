import setPageTitle from '../utils/set-page-title';
import Tree from '../containers/Tree';
import treeArr from './tree-arr';

export default function (data) {
  const tree = new Tree(treeArr);
  const wrapper = document.getElementById('wrapper');

  tree.replaceContentOf(wrapper);
  setPageTitle(data);
}

