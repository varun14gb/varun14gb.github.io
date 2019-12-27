var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");
var react = document.getElementById("react");
var node = document.getElementById("node");
var mongo = document.getElementById("mongo");

function setp ( element, value) {
    var width = 1;
    setInterval(() => {
        if(width < value){
            element.style.width = `${++width}%`;
        }
    }, 15);
}

setskills = () => {
    setp(html, 100);
    setp(css, 90);
    setp(js, 80);
    setp(react, 60);
    setp(node, 70);
    setp(mongo, 40);
};

var flag = 0;

window.addEventListener("scroll",function() {
    var hT = document.getElementById("skills").offsetTop,
        hH = document.getElementById("skills").offsetHeight,
        wH = window.innerHeight,
        wS = window.pageYOffset;
    if (wS > (hT+hH-1.4*wH)){
        if (flag == 0) {
            setskills();
            flag++;
        }
    }
 });

 window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("pbar").style.width = scrolled + "%";
}

function openNav() {
    document.querySelector(".sidenav").style.transition = "0.5s";
    document.querySelector(".sidenav").style.width = "100%";
  }
  
function closeNav() {
    document.querySelector(".sidenav").style.transition = "none";
    document.querySelector(".sidenav").style.width = "0";
}

function submitform() {
    let name = document.getElementById("uname").value;
    let mail = document.getElementById("uemail").value;
    let message = document.getElementById("umessage").value;
    window.open(`mailto:varun14gb@gmail.com?subject=Hey! Let's work together. I am ${name} and my email is ${mail} .&body=${message}`);
}