// Делаем слайдер для фоновых изображений
// Собираем массив изображений(кол-во зависит от БД)
let arrCatalogPhotoMain = document.querySelectorAll('.catalog-photo-main img');


// Создаем массив и наполняем его кнопками, в зависимости от кол-ва изображений
let wrapperSliderImg = document.querySelector('.wrapper-slider-img');
for (let i = 0; i < arrCatalogPhotoMain.length; i++) {
  let btnSlider = document.createElement('button');
  btnSlider.classList.add('button-slider-img');
  wrapperSliderImg.appendChild(btnSlider);
  wrapperSliderImg.firstElementChild.classList.add('active');
};

// Собираем кнопки в один массив и перекрашиваем их, в зависимости от их активности(нажатые или нет)
let collectionBtnSlider = document.querySelectorAll('.button-slider-img');
collectionBtnSlider.forEach(el => {
  el.addEventListener('click', (event) => {
    collectionBtnSlider.forEach(el => {
      el.classList.remove('active');
    })
    el.classList.add('active');

    // Перебираем массив с переключателями и отбражаем изображение, соответствующее индексу переключателя. Если индекс переключателя 1 - то и будет показываться изображение с индексом 1. А остальные прячем
    for (let i = 0; i < collectionBtnSlider.length; i++) {
      if (collectionBtnSlider[i] === event.target) {
        arrCatalogPhotoMain[i].classList.add('active')
      } else {
        arrCatalogPhotoMain[i].classList.remove('active')
      }
    }
  });
});

let sliderArrowMain = document.querySelectorAll('.slider-arrow');

sliderArrowMain.forEach(el => {
  el.addEventListener('click', (event) => {
    let activeIndex = -1; // Индекс активного элемента

    arrCatalogPhotoMain.forEach((el, index) => {
      if (el.classList.contains('active')) {
        activeIndex = index;
      }
    });

    if (event.target === sliderArrowMain[0]) { // Левая стрелка
      if (activeIndex !== -1) {
        arrCatalogPhotoMain[activeIndex].classList.remove('active');

        // Переключение на предыдущий элемент
        if (activeIndex > 0) {
          arrCatalogPhotoMain[activeIndex - 1].classList.add('active');
        } else {
          // Если активный элемент первый, переключаемся на последний
          arrCatalogPhotoMain[arrCatalogPhotoMain.length - 1].classList.add('active');
        }
      }
    } else { // Правая стрелка
      if (activeIndex !== -1) {
        arrCatalogPhotoMain[activeIndex].classList.remove('active');

        // Переключение на следующий элемент
        if (activeIndex < arrCatalogPhotoMain.length - 1) {
          arrCatalogPhotoMain[activeIndex + 1].classList.add('active');
        } else {
          // Если активный элемент последний, переключаемся на первый
          arrCatalogPhotoMain[0].classList.add('active');
        }
      }
    }
  });
});



const slides = document.querySelectorAll('.img-project');
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

// Переключаем слайд каждые 5 секунд
// setInterval(nextSlide, 8000);


// Раздел "План Фасад Описание"
let titlePlanFacadeDesc = document.querySelectorAll('.title-plan-facade-desc-project');
let contentPlanFacadeDesc = document.querySelectorAll('.wrapper-content-plan-facade-desc-project div');
titlePlanFacadeDesc.forEach(el => {
  el.addEventListener('click', (event) => {
    titlePlanFacadeDesc.forEach(el => {
      el.classList.remove('active-title');
    });
    el.classList.add('active-title');

    for (let i = 0; i < titlePlanFacadeDesc.length; i++) {
      if (titlePlanFacadeDesc[i] === event.target) {
        contentPlanFacadeDesc[i].classList.add('active')
        if(i === 1) {
          document.querySelector('.wrapper-title-plan-facade-desc-project').style.paddingBottom = '0'
        } else {
          document.querySelector('.wrapper-title-plan-facade-desc-project').style.paddingBottom = '50px'
        }
      } else {
        contentPlanFacadeDesc[i].classList.remove('active')
      }
    }
  });
})


// Собираем массив изображений(кол-во зависит от БД)
let imgPlanProject = document.querySelectorAll('.content-plan-project');


// Создаем массив и наполняем его кнопками, в зависимости от кол-ва изображений
let wrapperSliderImgPlan = document.querySelector('.wrapper-slider-img-plan');
for (let i = 0; i < imgPlanProject.length; i++) {
  let btnSlider = document.createElement('button');
  btnSlider.classList.add('button-slider-img-plan');
  wrapperSliderImgPlan.appendChild(btnSlider);
  wrapperSliderImgPlan.firstElementChild.classList.add('active');
};

let btnSliderImgPlan = document.querySelectorAll('.button-slider-img-plan')


let createSlider = (arrFirst, arrSecond) => {
  arrFirst.forEach(el => {
    el.addEventListener('click', (event) => {
      arrFirst.forEach(el => {
        el.classList.remove('active');
      })
      el.classList.add('active');
  
      // Перебираем массив с переключателями и отбражаем изображение, соответствующее индексу переключателя. Если индекс переключателя 1 - то и будет показываться изображение с индексом 1. А остальные прячем
      for (let i = 0; i < arrFirst.length; i++) {
        if (arrFirst[i] === event.target) {
          arrSecond[i].classList.add('active')
        } else {
          arrSecond[i].classList.remove('active')
        }
      }
    });
  })
};

createSlider(btnSliderImgPlan, imgPlanProject);





// Раздел "Возможно поэтапное строительство"
let leftSectionsBuilding = document.querySelectorAll('.name-sections-building');
let firstDescBuilding = document.querySelector('#first-desc');
let secondDescBuilding = document.querySelector('#second-desc');
let thirdDescBuilding = document.querySelector('#third-desc');
let fourDescBuilding = document.querySelector('#four-desc');

leftSectionsBuilding.forEach(el => {
  el.addEventListener('click', () => {
    leftSectionsBuilding.forEach(el => {
      el.classList.remove('active-gold');
    });
    el.classList.add('active-gold');

    switch (el.id) {
      case 'first-name': {
        firstDescBuilding.innerText = 'Земляные работы';
        secondDescBuilding.innerText = 'Фундамент';
        thirdDescBuilding.innerText = 'Перекрытия 1 этажа';
        thirdDescBuilding.classList.add('third-description');
        fourDescBuilding.style.display = 'none';
      }
        break;
      case 'second-name': {
        firstDescBuilding.innerText = 'Стены';
        secondDescBuilding.innerText = 'Перекрытия';
        thirdDescBuilding.innerText = 'Кровля';
        thirdDescBuilding.classList.add('third-description');
        fourDescBuilding.style.display = 'none';
      }
        break;
      case 'third-name': {
        firstDescBuilding.innerText = 'Окна, двери';
        secondDescBuilding.innerText = 'Утепление дома';
        thirdDescBuilding.innerText = 'Отделка фасада';
        thirdDescBuilding.classList.remove('third-description');
        fourDescBuilding.style.display = 'block';
        fourDescBuilding.innerText = 'Софиты, водосточка';
      }
        break;
      case 'four-name': {
        firstDescBuilding.innerText = ' Все коммуникации';
        secondDescBuilding.innerText = 'Черновая отделка';
        thirdDescBuilding.innerText = 'Отделка фасада';
        thirdDescBuilding.classList.remove('third-description');
        fourDescBuilding.style.display = 'block';
        fourDescBuilding.innerText = 'Чистовая отделка';
      }
        break;
      case 'five-name': {
        firstDescBuilding.innerText = 'Установка электроприборов';
        secondDescBuilding.innerText = 'Декорирование интерьера';
        thirdDescBuilding.innerText = 'Мебелеровка';
        thirdDescBuilding.classList.add('third-description');
        fourDescBuilding.style.display = 'none';
      }
        break;
    }
  })
})


let sliderBlockMaterialsImg = document.querySelectorAll('.wrapper-slider-block-materials img');
console.log(sliderBlockMaterialsImg);
let num = 0;
let wrappeImgBlockMaterials = document.querySelector('.wrapper-img-block-materials');
sliderBlockMaterialsImg.forEach(el => {
  el.addEventListener('click', () => {
    num = num - 200;
    wrappeImgBlockMaterials.style.transform = `translateX(${num}px)`;
  })
})



// Блок "Нужна консультация"
let btnSendForm = document.querySelector('.send-form');
btnSendForm.addEventListener('click', (event) => {
  event.preventDefault()
});