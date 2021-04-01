document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior == "";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior == "unset";
  }, 3000);
});



window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 2000);
};



document.querySelector('.humburger-menu').addEventListener('click',() =>{
    document.querySelector('.container').classList.toggle('change');
});

                                        

