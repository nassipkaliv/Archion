//Кнопки для модальных окон

//Кнопка "внести изменения в проект"
let btnGetChangeProject = document.querySelector('#btn-change-project');

// Получаем секцию с модальным окном
let modalFormChangeProject = document.querySelector('.form-change-project');

// Кнопки по отправки формы, собираем в массив
let btnSubmitForm = document.querySelectorAll('button.form');

// Кнопки по закрытию формы, собираем в массив
let closeFromProject = document.querySelectorAll('.close-form-krest');

//Функция по обработке модального окна, кнопок открытия и закрытия модального окна
let addEventToForm = (btnOpen, wrapperForm) => {
  //Кнопка открытия
  btnOpen.addEventListener('click', () => {
    wrapperForm.classList.add('active')
  });

  btnSubmitForm.forEach(el => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      wrapperForm.classList.remove('active')
    })
  })

  //Кнопка закрытия
  closeFromProject.forEach(el => {
    el.addEventListener('click', () => {
      wrapperForm.classList.remove('active')
    })
  })

  //Закрываем модальное окно при нажатии на область вне окна
  window.addEventListener('click', (event) => {
    if (event.target === wrapperForm) {
      wrapperForm.classList.remove('active')
    }
  })

  //Закрываем модальное окно при нажатии на Esc
  window.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
      wrapperForm.classList.remove('active')
    }
  })
};

//Вызываем функцию
addEventToForm(btnGetChangeProject, modalFormChangeProject);

// "Слушаем" чекбоксы и меняем картинки
let checkBoxChangeProject = document.querySelectorAll('.label-checkbox input');
let labelChangeProject = document.querySelectorAll('.label-checkbox');
checkBoxChangeProject.forEach(el => {
  el.addEventListener('click', () => {
    (el.checked === true) ? el.checked = false : el.checked = true;
  })
})
labelChangeProject.forEach(label => {
  label.addEventListener('click', () => {
    (label.children[0].checked === true) ? label.children[0].checked = false : label.children[0].checked = true
  })
})


// Форма "Заказать проект"
let modalFormOrderProject = document.querySelector('.form-order-project');
let btnOrderProject = document.querySelector('#btn-project-order');

addEventToForm(btnOrderProject, modalFormOrderProject);

// Форма "Получить смету"
let btnGetSmeta = document.querySelector('#btn-get-outlay');
let modalFormGetSmeta = document.querySelector('.form-get-smeta');

addEventToForm(btnGetSmeta, modalFormGetSmeta);

// Форма "Узнать стоимость"
// let btnGetPrice = document.querySelector('#btn-get-price');
// let modalFormGetPrice = document.querySelector('.form-get-price');

// addEventToForm(btnGetPrice, modalFormGetPrice);



// В форме "получить смету" скрипт для отображения соцсетей и инпутов

// Получаем массив иконок
let wrapperSocialFormPproject = document.querySelectorAll('.wrapper-social-form-project svg');

// Получаем массив инпутов
let labelFeedbackFormGetSmeta = document.querySelectorAll('.feedback-form-get-smeta label');

// Перебираем массив: перекрашиваем неактивные и подсвечиваем активную иконку
// Перебираем массив: прячем неактивные, показываем активный
wrapperSocialFormPproject.forEach(el => {
  el.addEventListener('click', () => {
    wrapperSocialFormPproject.forEach(el => {
      el.children[0].setAttribute('fill', '#969696')
    })

    el.children[0].setAttribute('fill', '#14010C');

    switch (el.id) {
      case 'icon-phone-svg': {
        labelFeedbackFormGetSmeta.forEach(elem => {
          elem.style.display = 'none';

          if (elem.id === 'label-phone') {
            elem.style.display = 'flex';
            labelFeedbackFormGetSmeta[0].style.display = 'flex';
          }
        })
      }
        break;
      case 'icon-wa-svg': {
        labelFeedbackFormGetSmeta.forEach(elem => {
          elem.style.display = 'none';

          if (elem.id === 'label-wa') {
            elem.style.display = 'flex';
            labelFeedbackFormGetSmeta[0].style.display = 'flex';
          }
        })
      }
        break;
      case 'icon-tg-svg': {
        labelFeedbackFormGetSmeta.forEach(elem => {
          elem.style.display = 'none';

          if (elem.id === 'label-tg') {
            elem.style.display = 'flex';
            labelFeedbackFormGetSmeta[0].style.display = 'flex';
          }
        })
      }
        break;
      case 'icon-mail-svg': {
        labelFeedbackFormGetSmeta.forEach(elem => {
          elem.style.display = 'none';

          if (elem.id === 'label-mail') {
            elem.style.display = 'flex';
            labelFeedbackFormGetSmeta[0].style.display = 'flex';
          }
        })
      }
        break;
    }
  })
});