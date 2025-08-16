// Like button toggle
document.querySelectorAll('.blog-gallery .like-button').forEach(button => {
  button.addEventListener('click', () => {
    const liked = button.getAttribute('aria-pressed') === 'true';
    const likeCountSpan = button.querySelector('.like-count');
    let count = Number(likeCountSpan.textContent) || 0;
    if (liked) {
      button.setAttribute('aria-pressed', 'false');
      likeCountSpan.textContent = count > 0 ? count - 1 : 0;
    } else {
      button.setAttribute('aria-pressed', 'true');
      likeCountSpan.textContent = count + 1;
    }
  });
});
