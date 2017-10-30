import setPageTitle from '../utils/set-page-title';

function errorDetails() {
  return `
    <div>
      404 Page not found
    </div>
  `;
}

export default function (data) {
  const wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = errorDetails();
  setPageTitle(data);
}

