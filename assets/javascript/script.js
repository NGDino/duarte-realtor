
//materialize CSS initialization
$(document).ready(function(){
    $('.parallax').parallax()

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        duration: 200
    });
    //function for autoplay carousel
    setInterval(function(){
        $('.carousel').carousel('next')
    }, 7000)
    $('select').formSelect();

    $('.sidenav').sidenav();

    $('.modal').modal();

    $('.tabs').tabs();
});


const url = 'https://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz16vp8zpl8uj_85kuc&screenname=dduarte0&count=5&output=json'

function getReviews(){

    $.getJSON(url, function(data){
        console.log(data)

        console.log('picking reviews', data.response.results.proReviews.review)
        const reviews = data.response.results.proReviews.review
        for(let review of reviews){
            console.log(review.description)
            const reviewContainer = document.querySelector('#review-container')
    
            const reviewDiv = document.createElement('div')
            reviewDiv.classList.add('carousel-item', 'white-text', 'valign-wrapper')

            reviewDiv.innerHTML =`
                <h2 class="center">"${review.description}"</h2>
            
            `

            reviewContainer.appendChild(reviewDiv);
            
            setCarousel()
        }
    })
}



function setCarousel(){
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        // indicators: true,
        duration: 200
    });
    // function for autoplay carousel
    setInterval(function(){
        $('.carousel').carousel('next')
    }, 7000)
}



const emailMessage=(event) =>{
    event.preventDefault;
    console.log('func called')
}

//model image slides
var slideIndex = 1;showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}


//for model number 2

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo2");
    var captionText = document.getElementById("caption2");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}