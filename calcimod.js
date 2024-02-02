let first = document.getElementById('first');
let second = document.getElementById('second');
let result = document.getElementById('result');
let btn = document.getElementsByClassName('btn');
let second_number = document.getElementById('second_number');
let add = document.getElementById('add');
let subs = document.getElementById('subs');
let divide = document.getElementById('div');
let multiply = document.getElementById('multiply');
let clear = document.getElementById('clear')

let display1 = "";
let display2 = "";
const listener = function (event) {
    display1 = display1 + event.target.innerText;
    first.value = display1;
}

const listener2 = function (event) {
    display2 = display2 + event.target.innerText;
    second.value = display2;
}
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', listener);
}


second_number.addEventListener('click', function () {
    for (let i = 0; i < btn.length; i++) {
        btn[i].removeEventListener("click", listener, { passive: true });
    }

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', listener2);
    }
});

add.addEventListener('click', function () {
    let addedValue = parseInt(display1) + parseInt(display2);
    result.value = addedValue;
    document.getElementById('result').style.color = "blue"
});

subs.addEventListener('click', function () {
    let subtractedValue = parseInt(display1) - parseInt(display2);
    result.value = subtractedValue;
    document.getElementById('result').style.color = "blue"
});

divide.addEventListener('click', function () {
    let dividedValue = parseInt(display1) / parseInt(display2);
    result.value = dividedValue;
    document.getElementById('result').style.color = "blue"
});

multiply.addEventListener('click', function () {
    let multipliedValue = parseInt(display1) * parseInt(display2);
    result.value = multipliedValue;
    document.getElementById('result').style.color = "blue"
});
clear.addEventListener('click', function () {


    for (let i = 0; i < btn.length; i++) {
        btn[i].removeEventListener("click", listener2, { passive: true });
    }

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', listener);
    }

    first.value = "";
    second.value = "";
    result.value = "";
    display1 = "";
    display2 = "";

})