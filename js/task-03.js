const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");
images.forEach(image => { 
  gallery.insertAdjacentHTML('afterbegin', '<li><img class = item ></li>');
  const imgEL = document.querySelector('.item');
  imgEL.alt = image.alt;
  imgEL.src = image.url;
  imgEL.style.borderRadius = '10px';
  imgEL.style.marginBottom = '10px';
  imgEL.width = 360;
})