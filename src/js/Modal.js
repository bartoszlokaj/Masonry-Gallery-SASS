const modal = () => {
  console.log('hello from modal');
  const backdrop = document.querySelector('.backdrop'),
        input = document.querySelectorAll('.input');

  input.forEach(el => {
    el.addEventListener('click', () => {
      backdrop.classList.add('backdropActive');
    })
  })

  backdrop.addEventListener('click', () => {
    backdrop.classList.toggle('backdropActive');
  })

};
// modal();
export default modal;
