import TvShow from '../containers/TvShow';

export default function () {
  const tvShow = new TvShow('Doctor Who');
  const wrapper = document.getElementById('wrapper');

  tvShow.addTo(wrapper);
}

