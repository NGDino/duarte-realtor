
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
});

const carousel = $('.carousel')

const url = 'https://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz16vp8zpl8uj_85kuc&screenname=dduarte0&count=5&output=json'

const slideTimer = () =>{
    setTimeout()(function(){
        
    })
}



// $.getJSON(url, function(data){
//     console.log(data)
// })

