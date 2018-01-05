export default function (text = '', isChecked = false) {
  return `
    <li> 
      <input class="checklist-check" type="checkbox" ${isChecked ? 'checked' : ''}/>
      <span class="checklist-text ${isChecked ? 'checklist-text--strike' : ''}">${text}</span>
      <a href="#" class="checklist-delete-item">&#10006;</a>
    </li>
  `;
}
