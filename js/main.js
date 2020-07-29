//carousel
$(function() {
    let owl = $(".banner-carousel");
    owl.owlCarousel({
        loop: true,
        items:1,
        margin: 100,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoHeight: true,
        nav : true,
        // navigation : true,
        responsive:{
            780: {
                nav: false,
            }
        }

    });
    $('.next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });
});



// $(function() {
//     let owl2 = $(".bottom-carousel");
//     owl2.owlCarousel({
//         center: true,
//         loop: true,
//         items: 1,
//         margin: 30,
//         dots: false,
//         // autoplay:true,
//         // autoplayTimeout:5000,
//         autoHeight: true,
//         nav : true,
//         // navigation : true,
//         responsive:{
//             0:{
//                 items:1
//             },
//             // 600:{
//             //     items:2
//             // },
//             1200:{
//                 items:3
//             }
//             // 780: {
//             //     items:1,
//             //     nav: false,
//             // }
//         }
//
//     });
//     $('.next').click(function() {
//         owl2.trigger('next.owl.carousel');
//     });
//     $('.prev').click(function() {
//         owl2.trigger('prev.owl.carousel', [300]);
//     });
// });

//anchor

$(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);

    });
});