let htmlProgress = document.querySelector(".html-css");
let htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlSpeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlSpeed);

//JAVASCRIPT PROGRESS CIRCULAR BAR
let javaScriptProgress = document.querySelector(".javascript");
let javascriptValue = document.querySelector(".javascript-progress");

let javaScriptStartValue = 0;
let javaScriptEndValue = 75;
let javaScriptSpeed = 30;

let progressJs = setInterval(() => {
  javaScriptStartValue++;

  javascriptValue.textContent = `${javaScriptStartValue}%`;
  javaScriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javaScriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javaScriptStartValue == javaScriptEndValue) {
    clearInterval(progressJs);
  }
}, javaScriptSpeed);

// php progress circular bar
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

document.getElementById("btnContact").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});

document.getElementById("btnLinkedin").addEventListener("click", function () {
  window.location.href = "https://www.linkedin.com/in/omarrizaldii/";
});

let myButton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

myButton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
