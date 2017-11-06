import TvShowCard from './TvShowCard';

function makeTvShowCards(obj, target) {
  const tvShowCardsHolder = target;

  tvShowCardsHolder.innerHTML = '';
  obj.forEach((element) => {
    const tvShowCard = new TvShowCard(element);
    tvShowCard.addTo(tvShowCardsHolder);
  });
}

export default makeTvShowCards;
