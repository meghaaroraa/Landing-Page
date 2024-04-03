const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
    btn.classList.remove("active");
    });

    slides.forEach((slide) => {
    slide.classList.remove("active");
    });

    contents.forEach((content) => {
    content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    sliderNav(i);
    });
});

const testBtns = document.querySelectorAll(".test-nav-btn");
const reviews = document.querySelectorAll(".test-content");

var testSlider = function(manual){
    testBtns.forEach((btn) => {
        btn.classList.remove("active");
    });

    reviews.forEach((review) => {
        review.classList.remove("active");
    });

    testBtns[manual].classList.add("active");
    reviews[manual].classList.add("active");
}

testBtns.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        testSlider(i);
    });
});
