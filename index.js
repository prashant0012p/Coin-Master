var box1 = document.getElementById('one');
var box2 = document.getElementById('two');
var box3 = document.getElementById('three');


// container

let Container = document.getElementById("container");


//

let Button = document.getElementById("btn")

Button.setAttribute("onclick", "clickFunc()");



var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
var randomNumber3 = Math.floor(Math.random() * 6);



let random = [randomNumber1, randomNumber2, randomNumber3];
console.log(random);



function clickFunc() {


    setTimeout(() => {

        box1.innerHTML = random[0];
        box2.innerHTML = random[1];
        box3.innerHTML = random[2];


    }, 3000);

    if (random[0] == random[1] && random[2] == random[1]) {
        box1.innerHTML = random[0];
        box2.innerHTML = random[1];
        box3.innerHTML = random[2];
    } else {
        reload();
    }




}


function reload() {

    setTimeout(() => {
        window.location.reload(true);
    }, 6000);

}