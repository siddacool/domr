function Lookup(elmId) {
  const targetSelector = document.querySelector(`[data-domr-id="${elmId}"]`);

  if (targetSelector) {
    return targetSelector;
  }
}

export default Lookup;
