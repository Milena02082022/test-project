const showMoreButton = document.querySelector('#show-more-button');
const hiddenContent = document.querySelector('#hidden-content');

showMoreButton.addEventListener('click', function() {
  if (hiddenContent.style.display === 'none') {
    hiddenContent.style.display = 'block';
    showMoreButton.textContent = 'SHOW LESS';
  } else {
    hiddenContent.style.display = 'none';
    showMoreButton.textContent = 'SHOW MORE';
  }
});
