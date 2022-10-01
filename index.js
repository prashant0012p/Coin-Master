var box1 = document.getElementById('one');
var box2 = document.getElementById('two');
var box3 = document.getElementById('three');

var randomNumber1;
var randomNumber2;
var randomNumber3;

// container

let Container = document.getElementById("container");


//

let Button = document.getElementById("btn")

Button.setAttribute("onclick", "clickFunc()");









function clickFunc() {

    let randomemoji1 = ["😀", "😂", "😉", "🙂", "😍"];
    let randomemoji2 = ["😀", "😂", "😉", "🙂", "😍"];
    let randomemoji3 = ["😀", "😂", "😉", "🙂", "😍"];

    randomNumber1 = Math.floor(Math.random() * 5);
    randomNumber2 = Math.floor(Math.random() * 5);
    randomNumber3 = Math.floor(Math.random() * 5);

    setTimeout(() => {
        console.log(randomNumber1, randomNumber2, randomNumber3);

        box1.innerHTML = randomemoji1[randomNumber1];
        box2.innerHTML = randomemoji2[randomNumber2];
        box3.innerHTML = randomemoji3[randomNumber3];


    }, 1000);

}


// function reload() {

//     setTimeout(() => {
//         window.location.reload(true);
//     }, 6000);

// }