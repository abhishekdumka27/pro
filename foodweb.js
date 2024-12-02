let isNavVisible = false;
let isLoginVisible = false;

function nav() {
    let nav = document.querySelector(".nav");
    let login = document.querySelector(".login");

    if (!isNavVisible) {
        nav.style.display = "block";
        isNavVisible = true;
        if (isLoginVisible) {
            login.style.display = "none";
            isLoginVisible = false;
        }
    } else {
        nav.style.display = "none";
        isNavVisible = false;
    }
}

function login() {
    let login = document.querySelector(".login");
    let nav = document.querySelector(".nav");

    if (!isLoginVisible) {
        login.style.display = "block";
        isLoginVisible = true;
        if (isNavVisible) {
            nav.style.display = "none";
            isNavVisible = false;
        }
    } else {
        login.style.display = "none";
        isLoginVisible = false;
    }
}


// Slide bar

let slide = document.querySelectorAll(".customer");
let count = 0;
console.log(slide);

slide.forEach(function(customer, index){
    customer.style.left=`${index * 100}%`
})

function next(){
    count ++;
    if(count == slide.length){
        count=0;
    }
    bar()
}

function pre(){
    count--;
    if(count == -1){
        count = slide.length-1
    }
    bar()
}


function bar(){
    slide.forEach(function(customer){
        customer.style.transform = `translateX(-${count * 100}%)`
    });}
