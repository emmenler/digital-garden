'use strict';
const topicElList = document.querySelectorAll('.topic-container');

for (const topicEl of topicElList) {
  topicEl.addEventListener('click', () => {
    removeClasses();
    topicEl.classList.remove('closed');
    topicEl.classList.add('open');
  });
}

function removeClasses() {
  topicElList.forEach((topicEl) => {
    topicEl.classList.remove('open');
    topicEl.classList.add('closed');
  });
}
