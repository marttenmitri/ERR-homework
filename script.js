
const url = 'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';
const input = 3;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.data.category.frontPage);

    for (i = 1; i <= 24; i++) {
      if (i !== 2 && i !== 12 && i !== 18) {
        document.getElementById("slider-heading-" + i).innerHTML = data.data.category.frontPage[i].header;
        const sliderContainer = document.getElementById('slider-container-' + i);
        data.data.category.frontPage[i].data.forEach(item => {
          const slide = document.createElement('div');
          slide.classList.add('splide__slide');

          const slideImg = document.createElement('img');
          slideImg.setAttribute('src', item.verticalPhotos[0].photoUrlBase);
          slideImg.setAttribute('alt', item.title);

          slide.appendChild(slideImg);
          sliderContainer.appendChild(slide);
        });


        new Splide('#slider-' + i, {
          pagination: false,
          type: 'loop',
          perPage: 6,
          perMove: 6,
          gap: 20,
          padding: {
            left: '4%',
            right: '4%'
          },
          breakpoints: {
            1000: {
              perPage: 4,
              perMove: 4
            },
            500: {
              perPage: 2,
              perMove: 2
            }
          },
        }).mount();
      }
    }
  })
  .catch(error => console.error(error));


