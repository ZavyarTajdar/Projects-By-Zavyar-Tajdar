const head_name = document.querySelector('.App-Name')
head_name.addEventListener('click', (e) => {
    location.reload()
})
const refreshpage = document.querySelector('#refresh')
refreshpage.addEventListener('click', (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
const refresh = document.querySelector('.refresh')
refresh.addEventListener('click', (e) => {
    location.reload();
})
const like = document.querySelectorAll('.fa-heart')
like.forEach(like => {
  like.addEventListener('click', (e) => {
    if (e.target.style.color === 'red') {
      e.target.style.color = '';   // unlike (back to default color)
    } else {
      e.target.style.color = 'red'; // like
    }
  });
});
const save = document.querySelectorAll('.save')
save.forEach(save => {
  save.addEventListener('click', (e) => {
    if (e.target.style.color === '#1DA1F2') {
      e.target.style.color = '';   // unlike (back to default color)
    } else {
      e.target.style.color = '#1DA1F2'; // like
    }
  });
});