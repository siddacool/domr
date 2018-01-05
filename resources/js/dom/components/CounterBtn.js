export default function (type = 'inc') {
  return `
    <a class="counter-btn counter-btn--${type}"/> ${type === 'inc' ? '+' : '-'} </a>
  `;
}
