'use strict';
const topicEl = document.querySelector('.topic-container');

topicEl.addEventListener('click', openTopic);

function openTopic() {
  topicEl.classList.toggle('closed');
  topicEl.classList.toggle('open');
}
