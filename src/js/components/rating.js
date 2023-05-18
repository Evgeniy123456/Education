const ratingBtn = document.getElementById('grantsBtn-language'),
      ratingBtn1 = document.getElementById('grantsBtn-bacalavr'),
      ratingBtn2 = document.getElementById('grantsBtn-masters');

let ratingCard = document.querySelectorAll('.grants__card').length + 1;
let ratingCard1 = document.querySelectorAll('.grants__card1').length + 1;
let ratingCard2 = document.querySelectorAll('.grants__card2').length + 1;
let items = 6;
let items1 = 6;
let items2 = 6;

// языковые курсы
ratingBtn.addEventListener('click', function() {
  items +=3;
  const array = Array.from(document.querySelector('.grants-tabs__panel').children);
  const visItem = array.slice(0, items);

  visItem.forEach(el => el.classList.add('is-visible'));

  if (visItem.length === ratingCard) {
    ratingBtn.setAttribute('disabled', 'disabled');
    ratingBtn.textContent = 'Пока это всё';
  }
});

// бакалавриат
ratingBtn1.addEventListener('click', function() {
  items1 +=3;
  const array1 = Array.from(document.querySelector('.grants-tabs__panel1').children);
  const visItem1 = array1.slice(0, items1);

  visItem1.forEach(el => el.classList.add('is-visible'));

  if (visItem1.length === ratingCard1) {
    ratingBtn1.setAttribute('disabled', 'disabled');
    ratingBtn1.textContent = 'Пока это всё';
  }
});

// магистратура
ratingBtn2.addEventListener('click', function() {
  items2 +=3;
  const array2 = Array.from(document.querySelector('.grants-tabs__panel2').children);
  const visItem2 = array2.slice(0, items2);

  visItem2.forEach(el => el.classList.add('is-visible'));

  if (visItem2.length === ratingCard2) {
    ratingBtn2.setAttribute('disabled', 'disabled');
    ratingBtn2.textContent = 'Пока это всё';
  }
});
