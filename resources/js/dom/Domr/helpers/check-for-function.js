function checkForFunction(view, data = '') {
  if (typeof view === 'function') {
    view(data);
  } else {
    view;
  }
}

export default checkForFunction;
