'use strict';
const topicElList = document.querySelectorAll('.topic-container');
const nameElList = document.querySelectorAll('.name-container');

for (const nameEl of nameElList) {
  nameEl.addEventListener('click', () => {
    if (nameEl.parentElement.classList.contains('open')) {
      nameEl.parentElement.classList.toggle('open');
    } else {
      removeClasses();
      nameEl.parentElement.classList.toggle('open');
    }
  });
}

function removeClasses() {
  topicElList.forEach((topicEl) => {
    topicEl.classList.remove('open');
  });
}
