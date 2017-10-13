export default function (start, end) {
  const hash = location.hash.replace('#', '');

  let target;
  if (end) {
    target = hash.split(start).pop().split(end).shift();
  } else {
    target = hash.split(start).pop();
  }

  console.log(start);
  console.log(end);

  return target ||;
}
