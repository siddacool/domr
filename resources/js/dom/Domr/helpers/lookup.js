function Lookup(elmId) {
  const targetDataTag = `[data-domr-id="${elmId}"]`;
  const targetSelector = document.querySelector(targetDataTag);
  const targetDuplicate = document.querySelectorAll(targetDataTag)[1];

  if (targetSelector) {
    if (targetDuplicate) {
      console.log(`${targetDataTag} Duplicate found`);
      console.log('data-domr-id ids should be unique');
    } else {
      return document.querySelector(`[data-domr-id="${elmId}"]`);
    }
  } else {
    console.log(`${elmId} does not exist`);
    console.log(`Could not find ${targetDataTag}`);
  }
}

export default Lookup;
