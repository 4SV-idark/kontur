/* Скрипт для slick Начало */
$(document).ready(function () {

    $('.single-item').slick({
        prevArrow: '<button type="button" class="btn slider-btn slider-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="btn slider-btn slider-next"><i class="fa-solid fa-arrow-right"></i></button>',
    });

});
/* Скрипт для slick Конец */


/* Скрипт для Yandex MAP Начало */
let center = [55.02908749117409,82.92624779260281];

ymaps.ready(init);
function init(){
    let map = new ymaps.Map ('map', {
        center: center,
        zoom: 16,
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}
/* Скрипт для Yandex MAP Конец */


/* Скрипт для popup Начало */
// Get the modal
var modal = document.getElementById("mymodal");

// Get the button that opens the modal
var btn = document.getElementById("mybtn");
var btn2 = document.getElementById("mybtn-2");
var btn3 = document.getElementById("mybtn-3");
var btnmobile = document.getElementById("mybtn-mobile");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("learn__modal__close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // ADD THIS LINE
  document.body.style.height = "100%"; // ADD THIS LINE
}

// When the user clicks on the button, open the modal
btn2.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // ADD THIS LINE
    document.body.style.height = "100%"; // ADD THIS LINE
}

// When the user clicks on the button, open the modal
btn3.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // ADD THIS LINE
    document.body.style.height = "100%"; // ADD THIS LINE
}

// When the user clicks on the button, open the modal
btnmobile.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // ADD THIS LINE
  document.body.style.height = "100%"; // ADD THIS LINE
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // ADD THIS LINE
  document.body.style.height = "auto"; // ADD THIS LINE
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto";  // ADD THIS LINE    
  }
}
/* Скрипт для popup Конец */

/* mask Phone start */
let MaskOne = document.querySelector("#phone")
let maskone = new Inputmask("+7 999 - 999 - 99 -99")
maskone.mask(MaskOne)
/* mask Phone end */


/* Скрипт для burger'a Начало */

const menuBtn = document.querySelector(".burger");
const menuItems = document.querySelector(".main__content");
const menuItem = document.querySelectorAll(".main__menu__item");

function toggle() {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
}
  
menuBtn.addEventListener("click", function() {
    this.classList.toggle('active');
})
  
menuBtn.addEventListener("click", () => {
    toggle();
})


menuItem.forEach(item => {
    item.addEventListener("click", () => {
        if(menuBtn.classList.contains("open")) {
            toggle();
            menuBtn.classList.remove('active');
        } 
    });
});

/* Скрипт для burger'a Конец */