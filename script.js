const images = document.querySelectorAll('.box');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let slideIndex = 0;

showSlide(slideIndex);

function showSlide(n) {
  if (slideIndex > images.length - 1) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = images.length - 1;
  }

  let i;
  for (i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  images[slideIndex].style.display = 'block';
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[slideIndex].className += ' active';
}

prev.addEventListener('click', () => {
  showSlide((slideIndex -= 1));
});
next.addEventListener('click', () => {
  showSlide((slideIndex += 1));
});
dots.forEach((item, index) => {
  item.addEventListener('click', () => {
    showSlide((slideIndex = index));
  });
});
