function setCheckboxValue() {
  localStorage.setItem(this.id, this.checked);
}

$(document).ready(function () {
  const taskListItems = document.getElementsByClassName('task-list-item');

  for (let index = 0; index < taskListItems.length; index++) {
    const element = taskListItems[index];
    let checkbox = element.firstChild;
    if (checkbox.type == 'checkbox') {
      const checkboxItemValue = JSON.parse(localStorage.getItem(checkbox.id));
      if (checkboxItemValue) {
        checkbox.checked = true;
      }
      else {
        checkbox.checked = false;
      }
    }
    checkbox.addEventListener('click', setCheckboxValue);
  }
});
