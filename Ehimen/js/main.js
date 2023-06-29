
// const section = document.querySelector('.fade-section');
// section.classList.add('fade-out');

// // window.addEventListener("load", function () {
// //     const loader = document.getElementById("loading-page");
// //     loader.style.display = "none";
// //   },);
  
// //   setTimeout(function () {
// //     loader.style.display = "none";
// //   }, 5);

window.addEventListener("load", function () {
    const loader = document.getElementById("loading-page");
    const body = document.getElementById("body");
  
    setTimeout(function () {
      loader.style.display = "none";
      body.style.display = "block"; 
    }, 6000);
  });
  