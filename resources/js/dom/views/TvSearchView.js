import setPageTitle from '../utils/set-page-title';
import TvShow from '../containers/TvShow';

export default function (data) {
  let search = '';
  let showId = '';
  if (data.query) {
    if (data.query.search) {
      search = data.query.search.replace(/_/g, ' ');
    }

    if (data.query.id) {
      showId = data.query.id;
    }
  }

  const tvShow = new TvShow(search, showId);
  const wrapper = document.getElementById('wrapper');

  tvShow.replaceContentOf(wrapper);
  setPageTitle(data);
  console.log(data);
}

