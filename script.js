const drums = document.querySelectorAll('.drum');

drums.forEach(drum => {
  drum.addEventListener('click', () => {
    const sound = drum.getAttribute('data-sound');
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  });
});
