const OverlayTM = gsap.timeline();
OverlayTM.from('.content-title', {
  y: 100,
  rotateZ: '2deg',
  opacity: 0,
  ease: 'power2.inOut',
  stagger: 0.2,
  duration: 1,
});
OverlayTM.to('.overlay .box', {
  height: 0,
  stagger: 0.1,
  duration: 1,
  ease: 'power4.inOut',
});

const MainContent = [
  {
    image: './images/desktop-image-hero-1.jpg',
    title: 'Discover innovative ways to decorate',
    description:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your propertya reflection of you and what you love.',
  },
  {
    image: './images/desktop-image-hero-2.jpg',
    title: 'We are available all across the globe',
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: './images/desktop-image-hero-3.jpg',
    title: 'Manufactured with the best materials',
    description:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
];
const contentImage = document.querySelector('.content-image');
const contentTitle = document.querySelector('.content-title');
const contentDescription = document.querySelector('.content-description');
const prevBtn = document.querySelector('.btn-previous');
const nextBtn = document.querySelector('.btn-next');
const showContent = (n) => {
  contentImage.src = MainContent[n].image;
  contentImage.alt = MainContent[n].title;
  contentTitle.textContent = MainContent[n].title;
  contentDescription.textContent = MainContent[n].description;
};
showContent(2);
let currentSlide = 1;
let slidesLen = MainContent.length;
const previous = () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slidesLen - 1;
  }
  showContent(currentSlide);
};
const next = () => {
  if (currentSlide < slidesLen - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  showContent(currentSlide);
};
