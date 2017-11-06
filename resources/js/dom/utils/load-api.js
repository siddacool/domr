function loadApi(api, target, view) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', api, true);
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const obj = JSON.parse(xmlhttp.responseText);
        view(obj, target);
      }
    }
  };
  xmlhttp.send(null);
}

export default loadApi;

