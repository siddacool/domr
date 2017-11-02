function createElement(str, domrDataId) {
  const div = document.createElement('div');
  div.innerHTML = str;
  const container = document.createDocumentFragment();
  for (let i = 0; i < div.childNodes.length; i++) {
    const node = div.childNodes[i].cloneNode(true);
    container.appendChild(node);
  }

  if (domrDataId) {
    container.childNodes[1].setAttribute('data-domr-id', domrDataId);
  }
  return container.childNodes[1].outerHTML;
}

export default createElement;
