function checkForFunction(candidate) {
  const view = candidate.view;
  const routeData = candidate;

  if (candidate && view) {
    if (typeof view === 'function') {
      view(routeData);
    } else {
      view;
    }
  }
}

export default checkForFunction;
