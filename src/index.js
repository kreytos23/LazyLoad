import {registerImage} from './lazy.js';

const API = 'https://randomfox.ca/floof/'
const containerNode = document.getElementById('imagenes');
const btnAdd = document.getElementById('addImg');
const btnClean = document.getElementById('clean');


const fetchImage = async () => {
    const response = await fetch(API);
    const responseJSON = await response.json();
    const url = responseJSON.image;
    
    const containerImg = document.createElement('div');
    containerImg.className = "p-4";

    const image = document.createElement('img');
    image.dataset.src = url;
    image.className = "mx-auto";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";


    imageWrapper.appendChild(image);
    containerImg.appendChild(imageWrapper);
    containerNode.appendChild(containerImg);

    registerImage(containerImg);
}

const cleanImages = () => {
    [...containerNode.querySelectorAll('div.p-4')].forEach(child => {
        child.remove();
    });
};

btnAdd.addEventListener('click',fetchImage);
btnClean.addEventListener('click',cleanImages);
