const images = [...document.querySelectorAll('.image')];


const popup = document.querySelector('.popup');
const largeImage = document.querySelector('.large-image');
const closeBtn = document.querySelector('.close-btn');

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `img/series${i+1}.jpg`;
    largeImage.src = path;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})