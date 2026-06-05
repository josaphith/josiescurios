
const lightDark = document.getElementById("light-dark");
lightDark.addEventListener("click", () => { input = "checked" });

const mainHead = document.querySelector(".main-head");
window.addEventListener('scroll', function () {
    if (this.scrollY > 200) {
        mainHead.classList.add('slidedown');
    } else {
        mainHead.classList.remove('slidedown');
    }
})

const section = document.querySelector("section");
//const observer = new IntersectionObserver((entries) => {
//    entries.forEach(entry => {
//        if (entry.isIntersecting) {
//            entry.target.classList.add("show");
//        } else {
//            entry.target.classList.remove("show");
//        }
//    })
//},
//    {
//    threshold: 0
//})

//observer.observe(section);
