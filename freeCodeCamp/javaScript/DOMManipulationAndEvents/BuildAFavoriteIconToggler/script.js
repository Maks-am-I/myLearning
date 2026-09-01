const list = document.querySelector('.item-list');
const btns = list.querySelectorAll('.favorite-icon');

function toLikeLink(btn) {
  if(btn.classList.toggle('filled')) {
    btn.innerHTML = '&#10084';
  } else {
    btn.innerHTML = '&#9825';
  }
}

btns.forEach((btn) => {
  btn.addEventListener('click', () => toLikeLink(btn))
});
