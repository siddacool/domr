function saveToLocalStorage(itmArr) {
  localStorage.setItem('savedList', JSON.stringify(itmArr));
}

export default saveToLocalStorage;
