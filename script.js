let btn_open = document.querySelector('.open-modal');
let btn_close = document.querySelector('.btn-close');
let modal_container = document.querySelector('.modal-container');

btn_open.addEventListener('click', () => {
    modal_container.classList.add('active');
});
btn_close.addEventListener('click', () => {
    modal_container.classList.remove('active');
});
modal_container.addEventListener('click', (e) => {
    if (e.target.closest('modal-container')) {
        modal_container.classList.add('active');
    } else {
        e.target.classList.remove('active');
    }
});

var swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
});
var swiper2 = new Swiper('.mySwiper2', {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: swiper,
    },
});

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

