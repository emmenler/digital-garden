'use strict';
const topicElList = document.querySelectorAll('.topic-container');

for (const topicEl of topicElList) {
  topicEl.addEventListener('click', () => {
    if (topicEl.classList.contains('open')) {
      topicEl.classList.toggle('closed');
      topicEl.classList.toggle('open');
    } else {
      removeClasses();
      topicEl.classList.toggle('closed');
      topicEl.classList.toggle('open');
    }
  });
}

function removeClasses() {
  topicElList.forEach((topicEl) => {
    topicEl.classList.remove('open');
    topicEl.classList.add('closed');
  });
}
