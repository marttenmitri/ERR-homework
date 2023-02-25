
const url = 'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';
const input = 3;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.data.category.frontPage);

    for(i = 3; i<=6; i++){
    const sliderContainer = document.getElementById('slider-container-'+i);
    data.data.category.frontPage[i].data.forEach(item => {
      const slide = document.createElement('div');
      slide.classList.add('splide__slide');

      const slideImg = document.createElement('img');
      slideImg.setAttribute('src', item.verticalPhotos[0].photoUrlBase);
      slideImg.setAttribute('alt', item.title);

      slide.appendChild(slideImg);
      sliderContainer.appendChild(slide);
    });
    
    
    new Splide('#slider-'+i, {
      type: 'loop',
      perPage: 7,
      perMove: 7,
      gap: 20,
      breakpoints: {
        768: {
          perPage: 4,
          perMove: 4
        },
        576: {
          perPage: 2,
          perMove: 2
        }
      },
    }).mount();}
  })
  .catch(error => console.error(error));


