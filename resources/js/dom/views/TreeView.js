import Tree from '../containers/Tree';
import treeArr from './tree-arr';

export default function () {
  const tree = new Tree(treeArr);
  const wrapper = document.getElementById('wrapper');

  tree.addTo(wrapper);
}

