function getListArray() {
  const checkListUl = document.getElementById('checklist-ul');
  const target = checkListUl.querySelectorAll('li');
  const list = [];

  for (let i = 0; i < target.length; i++) {
    const obj = {};
    const targetDetails = target[i].querySelector('.checklist-text');
    let isChecked = false;
    if (targetDetails.classList.contains('checklist-text--strike')) {
      isChecked = true;
    }
    obj.msg = targetDetails.textContent;
    obj.isChecked = isChecked;

    list.push(obj);
  }

  return list;
}

export default getListArray;
