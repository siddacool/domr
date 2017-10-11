import TvShowCard from './TvShowCard';

function callApi(show, target) {
  const xmlhttp = new XMLHttpRequest();
  const tvShow = encodeURI(show);
  const api = `https://api.tvmaze.com/search/shows?q=${tvShow}`;
  xmlhttp.open('GET', api, true);
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const obj = JSON.parse(xmlhttp.responseText);
        const tvShowCardsHolder = target;
        tvShowCardsHolder.innerHTML = '';
        obj.forEach((element) => {
          const tvShowCard = new TvShowCard(element);
          tvShowCard.addTo(tvShowCardsHolder);
        });
      }
    }
  };
  xmlhttp.send(null);
}

export default callApi;
