function Lookup(elmId) {
  const targetSelector = document.querySelector(`[data-domr-id="${elmId}"]`);

  if (targetSelector) {
    return targetSelector;
  } else {
    console.log(`${elmId} does not exist`);
  }
}

export default Lookup;
