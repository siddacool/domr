function setPageTitle(data) {
  document.querySelector('title').text = data.pageTitle || data.name;
}

export default setPageTitle;
