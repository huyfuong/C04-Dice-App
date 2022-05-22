function change_img () {
    let img1 = document.getElementById("dice-1");
    let myimg1 = [
        './img/dice1.png',
        './img/dice2.png',
        './img/dice3.png',
        './img/dice4.png',
        './img/dice5.png',
        './img/dice6.png',
    ]
    let ramdomimg1 = myimg1[Math.floor(Math.random() * myimg1.length)];
    img1.src = ramdomimg1;

    let img2 = document.getElementById("dice-2");
    let myimg2 = [
        './img/dice1.png',
        './img/dice2.png',
        './img/dice3.png',
        './img/dice4.png',
        './img/dice5.png',
        './img/dice6.png',
    ]
    let ramdomimg2 = myimg2[Math.floor(Math.random() * myimg2.length)];
    img2.src = ramdomimg2;
}