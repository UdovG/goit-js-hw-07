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
  }
];

const galleryListEl = document.querySelector('.gallery');


function createLiElement(image) {
  const itemEl = document.createElement('li');
  const imageEl = document.createElement('img');
  imageEl.alt = image.alt;
  imageEl.src = image.url;
  imageEl.width = 350;
  imageEl.height = 300;
  itemEl.appendChild(imageEl);
  return itemEl;
}

const itemEl = images.map(createLiElement);
galleryListEl.append(...itemEl)