import setPageTitle from '../utils/set-page-title';
import TvShow from '../containers/TvShow';

export default function (data) {
  const tvShow = new TvShow();
  const wrapper = document.getElementById('wrapper');

  tvShow.addTo(wrapper);
  setPageTitle(data);
}

