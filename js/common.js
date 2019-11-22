$(document).ready(function ($) {
    var myFontSize = parseInt($("html").css("font-size")) / 100;
    var footerBtn = $("#productBtn"),
        footerMaks = $("#footer-mask"),
        footerPublicToggel = $("#productBtn  .child,#footer-mask")

    footerBtn.on("click", function (e) {
        var state = $(this).find(".child")[0].className.indexOf("hide") > -1
        footerPublicToggel.toggleClass("hide", !state).toggleClass("show", state)
    })

    footerMaks.on("click", function () {
        var state = $(this)[0].className.indexOf("hide") > -1
        footerPublicToggel.toggleClass("hide", !state).toggleClass("show", state)
    })

    if ($(".psgxl").length > 0) {
        var drainageSwiper = new Swiper(".psgxl .swiper-container", {
            speed: 600,
            slidesPerView: 2,
            spaceBetween: myFontSize * 20,
            loop: true,
            navigation: {
                prevEl: ".psgxl .swiper-button-prev",
                nextEl: ".psgxl .swiper-button-next",
            }
        })
    }
    if ($(".anli").length > 0) {
        var drainageSwiper = new Swiper(".anli .swiper-container", {
            speed: 600,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            spaceBetween: myFontSize * 20,
            loop: true,
            pagination: {
                el: ".anli .swiper-pagination"
            }
        })
    }
    if ($(".seller").length > 0) {
        var sellerSwiper = new Swiper(".seller .swiper-container", {
            speed: 600,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: myFontSize * 20,
            pagination: {
                el: ".seller .swiper-pagination"
            }
        })
    }

    if ($(".banner .swiper-slide").length > 1) {
        var bannerSwiper = new Swiper(".banner .swiper-container", {
            speed: 600,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            }
        })
    }
})