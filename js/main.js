$(document).ready(function() {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    })
    // toggle menu/navbar script
    $('.menu-btn').click (function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });

});

let links = document.querySelectorAll(".menu a")

links.forEach(link => {
    link.addEventListener("click", () => {
        $('.navbar .menu').removeClass("active");
        $('.menu-btn').removeClass("active");
    })
})

$(document).ready(function(){
    $(".portfolio-carousel").owlCarousel({
        items: 3,
        loop:true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay:true,
        responsive: {
            993: {
                items: 3
            },
            769: {
                items: 2
            },
            320: {
                items: 1
            }
        }

    });
});