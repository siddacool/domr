function checkForFunction(view) {
  if (typeof view === 'function') {
    view();
  } else {
    view;
  }
}

export default checkForFunction;
