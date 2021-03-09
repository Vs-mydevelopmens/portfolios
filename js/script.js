$(document).ready(function () {
	$('.header-burger').click(function (event) {
		$('.header-burger,.header-burger__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


// ==========================================
// <ВЫДЕЛЕНИЕ АКТИВНОГО МЕНЮ>
// ==========================================
$('a').click(function () {
    $('.menu-active').removeClass('menu-active');
    $(this).addClass('menu-active');
});
// ==========================================
// $('.tabs__item').click(function () {
//     $('.__active').removeClass('__active');
//     $(this).addClass('__active');
//     var tab = $(this).attr('href');
//     $(tab).fadeIn(400);
// });


// ==========================================
// </ВЫДЕЛЕНИЕ АКТИВНОГО МЕНЮ>
// ==========================================

// ==========================================
// <WEBP IMAGE>
// ==========================================
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
// ==========================================
// </WEBP IMAGE>
// ==========================================

// ==========================================
// <2 СКРИПТА НА ИЗОБРАЖЕНИЯ, ЕСЛИ НЕ ОТОБРАЖАЕТСЯ, АКТИВНЫЙ СКРИПТ ЗАКОМЕНТИРОВАТЬ, А ЗАКОМЕНТИРОВАННЫЙ РАССКОМЕНТИРОВАТЬ>
// ==========================================
// function ibg() {
//     let ibg = document.querySelectorAll(".ibg");
//     for (var i = 0; i < ibg.length; i++) {
//         if (ibg[i].querySelector('img')) {
//             ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
//         }
//     }
// }
// ibg();
// ==========================================
function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}
ibg();
// ==========================================
// </2 СКРИПТА НА ИЗОБРАЖЕНИЯ>
// ==========================================

// ==========================================
// <ПОДКЛЮЧЕНИЕ ТАБОВ ПОРТФОЛИО>
// ==========================================
var portfolio = document.querySelector('.portfolio-content');

var mixer = mixitup(portfolio);
// ==========================================
// </ПОДКЛЮЧЕНИЕ ТАБОВ ПОРТФОЛИО>
// ==========================================