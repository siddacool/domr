import TvShowEpisode from './TvShowEpisode';

function callApi(show, target) {
  const xmlhttp = new XMLHttpRequest();
  const api = `${show}`;
  xmlhttp.open('GET', api, true);
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const obj = JSON.parse(xmlhttp.responseText);
        const tvShowLatestEpisodeHolder = target;
        const tvShowEpisode = new TvShowEpisode(obj);

        tvShowEpisode.addTo(tvShowLatestEpisodeHolder);
      }
    }
  };
  xmlhttp.send(null);
}

export default callApi;
