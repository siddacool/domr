import getListArray from './get-list-array';
import saveToLocalStorage from './save-to-local-storage';

function saveListSnapshot() {
  const snapshot = getListArray();

  saveToLocalStorage(snapshot);
}

export default saveListSnapshot;
