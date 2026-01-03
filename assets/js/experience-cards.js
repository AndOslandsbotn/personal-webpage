document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.experience-card').forEach(card => {
    const content = card.querySelector('.exp-content');

    if (!content) return;

    card.addEventListener('click', () => {
      const isOpen = content.classList.contains('is-open');

      if (isOpen) {
        // CLOSE
        content.style.height = content.scrollHeight + 'px';
        requestAnimationFrame(() => {
          content.style.height = '0px';
          content.classList.remove('is-open');
        });
      } else {
        // OPEN
        content.classList.add('is-open');
        content.style.height = content.scrollHeight + 'px';
      }
    });

    content.addEventListener('transitionend', e => {
      if (e.propertyName !== 'height') return;
      if (content.classList.contains('is-open')) {
        content.style.height = 'auto';
      }
    });
  });
});

