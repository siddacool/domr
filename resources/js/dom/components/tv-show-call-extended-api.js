import TvShowExtendedInfo from './TvShowExtendedInfo';

function callApi(id, target) {
  const xmlhttp = new XMLHttpRequest();
  const tvShowId = encodeURI(id);
  const api = `http://api.tvmaze.com/shows/${tvShowId}?embed=cast`;
  xmlhttp.open('GET', api, true);
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const obj = JSON.parse(xmlhttp.responseText);
        const tvShowExtendedHolder = target;
        tvShowExtendedHolder.innerHTML = '';

        const tvShowCard = new TvShowExtendedInfo(obj);
        tvShowCard.addTo(tvShowExtendedHolder);
      }
    }
  };
  xmlhttp.send(null);
}

export default callApi;
