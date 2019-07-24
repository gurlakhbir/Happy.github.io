const firstBox = document.getElementById('shake');
firstBox.classList.add('shake', 'animated', 'infinite');
firstBox.textContent = 'Shake';

const secondBox = document.querySelector('.rattle');
secondBox.classList.remove('rattle');
secondBox.classList.add('wobble');
secondBox.textContent = ('wobble');

const thirdBox = document.querySelector('.container :nth-child(3)');
thirdBox.classList.add('rollIn');
thirdBox.textContent='roll';

const fourthBox = document.querySelector('[data-animation]');
fourthBox.classList.add(fourthBox.dataset.animation);

const fifthBox = document.getElementById('choose');
fifthBox.classList.add('rubberBand','animated','infinite');
fifthBox.textContent='rubberBand';

