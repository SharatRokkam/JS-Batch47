const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
   
    box.classList.forEach(cls => {
      const cssColors = ['red', 'green', 'blue', 'yellow', 'pink', 'violet'];
      if (cssColors.includes(cls)) {
        document.body.style.backgroundColor = cls;
      }
    });
  });
});


