function dateShow(){
    const nowDate = new Date();
    const day = nowDate.getDate();
    const month = nowDate.getMonth() + 1;
    const year = nowDate.getFullYear();
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();

    const tarih = `${day}/ ${month}/ ${year}`;
    const saat = `${hours}  `;
    const dakika = `${minutes} `;

    document.getElementById("tarih").innerHTML = tarih;
    document.getElementById("clock-tam").innerHTML = saat;
    document.getElementById("clock-dakika").innerHTML = dakika;
}

setInterval(dateShow, 1000);

dateShow();

var images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg","images/5.jpg"];

function handleImages(){
    const randomImages = Math.floor(Math.random() * images.length);
    const secilenImages = images[randomImages];
    return secilenImages;
}

window.onload = () =>{
    const newPicture = document.getElementById("backgorund");
    const newImage = handleImages();
    newPicture.src = newImage;
}