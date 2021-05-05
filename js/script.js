$(document).ready(function () {

    // $(".no-scrollable").mCustomScrollbar({
    //     theme:"dark",
    //     // scrollbarPosition: "outside"
    //     // autoHideScrollbar: true
    //     // mouseWheel:{ preventDefault: false }
    //     callbacks:{
    //         onScrollStart:function(){
    //             // let $("#example").scrollTop();
    //             // console.log("Scrolling started...");
    //         },
    //         onTotalScroll:function(){
    //             // console.log("Scrolled to end of content.");
    //             // $("#fullpage").scrollTop(60);
    //             // $('html').animate({
    //             //     scrollTop: $(window).position().top + 100
    //             // })
    //         }
    //     }
    // });
    $('.search__field').on('focus', function () {
        $(this).parent().addClass('focused')
    });

    $('.a-form__tab').on('click', function(){
        let parent = $(this).closest('.a-form');
        let id = $(this).attr('data-for');
        parent.find('.a-form__tab').removeClass('active');
        $(this).addClass('active');
        parent.find('.a-form__input').removeClass('active');
        parent.find('#'+id).addClass('active');
    });


    $('input[type="file"]').change(function(){
        let value = $(this).val();
        let parent = $(this).closest('.a-form__file');
        if(value === ''){
            parent.find('.js-value').text('Прикрепить документ');
        } else {
            parent.find('.js-value').text(value);
        }
    });

    let url = window.location.pathname;
    // console.log(url, url.indexOf('catalog'))

    function checkUrl(path, subnavLink){
        $('#menu').find('li[data-menuanchor=' + path + ']').addClass('active');
        // console.log('subnavLink', subnavLink)
        if(subnavLink != undefined){
            $('.page-subnav').find('.page-nav__link[href="'+ subnavLink +'"]').addClass('active')
        }
    }

    switch (url) {
        case '/news.html':
            checkUrl('news');
            break;
        case '/product.html':
            checkUrl('products');
            break;
        case '/catalog-gas.html':
            checkUrl('products', '/catalog-gas.html');
            break;
        case '/catalog-oil.html':
            checkUrl('products', '/catalog-oil.html');
            break;
        case '/catalog-energy.html':
            checkUrl('products', '/catalog-energy.html');
            break;
        case '/catalog-ks.html':
            checkUrl('products', '/catalog-ks.html');
            break;
        case '/catalog-spg.html':
            checkUrl('products', '/catalog-spg.html');
            break;
        default:
            console.log('-');
    }

    let
        sendMailForm = $('#sendMailForm'),
        sendMailFormButton = $('#sendMailFormButton'),
        sendMailFormTitle = sendMailForm.parent().find('.contacts__title'),
        sendMailFormTitleContent = sendMailForm.parent().find('.contacts__title').text(),
        sendMailFormDescriptionContent = sendMailForm.parent().find('.contacts__description').text(),
        sendMailFormDescription = sendMailForm.parent().find('.contacts__description');


    $(document).mouseup(function (e) {
        var container = $(".js-burger-menu");
        if (container.has(e.target).length === 0) {
            container.addClass('hide');
        }
        if (container.hasClass('hide')) {
            sendMailFormTitle.text(sendMailFormTitleContent)
            sendMailFormDescription.text(sendMailFormDescriptionContent)
            sendMailForm.css('display', 'block')
            $('.a-modal__button-close').css('display', 'block')
        }

        var search = $('.search');
        if (search.has(e.target).length === 0) {
            search.removeClass('focused');
        }
    });

    // $.fancybox.defaults.animationEffect = "fade";
    $('[data-fancybox]').fancybox({
        toolbar  : false,
        smallBtn : true,
        iframe : {
            preload : false
        }
    });

    $('#tab-container').easytabs({animationSpeed: 'fast', updateHash: false});

    // let screenUrl = window.location.hash;
    // console.log(screenUrl)
    // console.log(localStorage.getItem('test'))

    if(localStorage.getItem('test')){
        $('.page-preload').css('display', 'none');
        if($('#fullpage').length > 0){
            fullpage();
        }
    } else {
        if ($('.page-preload').length > 0) {
            $('body').css('overflow', 'hidden');
            setTimeout(function () {
                if ($('#fullpage').length > 0) {
                    fullpage();
                }
                $('body').css('overflow', 'visible');
            }, 6000);
            localStorage.setItem('test', 'preload показан');
        } else {
            if ($('#fullpage').length > 0) {
                fullpage();
            }
        }
    }
    function fullpage(){
        $('#fullpage').fullpage({
            // lockAnchors: true,
            anchors: ['start', 'products', 'news', 'contacts'],
            //anchors: ['start', 'block2', 'block2_1', 'block2_2', 'news', 'contacts'],
            menu: '#menu',
            css3: true,
            scrollingSpeed: 1000,
            responsiveWidth: 1025,
            // responsiveHeight: 648,
            // normalScrollElements: '.no-scrollable',
            afterLoad: function(origin, destination, direction){
                // console.log('afterLoad', origin, destination, direction);
                //  когда экран прокручен полностью
                let parentAlias = origin.split('_')[0];
                // console.log(parentAlias)
                $('.page-nav__item[data-menuanchor="'+ parentAlias +'"]').addClass('active')
                // screenUrl = window.location.hash;
                // console.log('-------afterLoad', screenUrl)

            },
            onLeave : function(origin, destination, direction){
                // console.log('-------onLeave', origin, destination, direction);
                //  когда экран покинут
                // let screenUrl = window.location.hash;
                // console.log('-------onLeave', screenUrl)
                // если содержит #block_2 подсвечивать Продукция
                // console.log(screenUrl.indexOf('block2'))
                // if(screenUrl.indexOf('block2') > 0){
                //     // $('.page-nav__item[data-menuanchor="block2"]').addClass('active')
                //     console.log(true)
                // }
            }
        });
    }


    function returnFalse(e){
        e = e||event;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }
//Ставьте запрет
    document.addEventListener("scroll", returnFalse);
//И после вашего скролла удалите запрет
//     document.removeEventListener("scroll", returnFalse);

    // когда мышь над этим блоком агддЫскщдд не будет скроллиться
    // document.querySelector('#sidebar').onwheel = e => e.stopPropagation();

    $('.a-nav__link').on('click', function () {
        $('.js-burger-menu').addClass('hide');
    });


    $('.article-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        // variableHeight: true,
        arrows: true,
        autoplay: false,
        prevArrow: $('.article-slider-arrow__prev'),
        nextArrow: $('.article-slider-arrow__next'),
    });

    $('.gallery').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // centerMode: true,
        variableWidth: true,
        arrows: false,
        autoplay: true
    });


    $('.slider-news').slick({
        prevArrow: $('.slider-news-arrow__prev'),
        nextArrow: $('.slider-news-arrow__next'),
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // centerMode: true,
        variableWidth: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    // variableWidth: false,
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 568,
                settings: {
                    // variableWidth: false,
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ]
    });


    /** форма в модальном окне **/

    //sendMailFormButton.on('click', function () {
    $('.a-form__submit.feedback').on('click', function () {
        console.log('send mail');
        var fd = new FormData($(this).parents('form:first')[0]);
        console.log(fd);
        fd.append("label", "WEBUPLOAD");
        $.ajax({
            url: "/feedback/send",
            type: "POST",
            data: fd,
            processData: false,  // tell jQuery not to process the data
            contentType: false   // tell jQuery not to set contentType
        }).done(function( data ) {
            console.log("PHP Output:");
            console.log( data );
        });


        sendMailFormTitle.text('Спасибо, ваш запрос отправлен!')
        sendMailFormDescription.text('Мы вам перезвоним или напишем, как только сможем!')
        sendMailForm.css('display', 'none')
        $('.a-modal__button-close').css('display', 'none')

        // sendMailFormTitle.text(sendMailFormTitleContent)
        // sendMailFormDescription.text(sendMailFormDescriptionContent)

        // setTimeout(function () {
        //     $('.a-modal-wrapper').fadeOut();
        // }, 2000)
        // setTimeout(function () {
        //     $('.a-modal-wrapper').addClass('hide')
        //     $('.a-modal').addClass('hide');
        //     sendMailFormTitle.text(sendMailFormTitleContent)
        //     sendMailFormDescription.text(sendMailFormDescriptionContent)
        // }, 3000)

    });


})

// $(window).resize(function () {
//
// })



// $(window).resize(function(){
//     if($(this).width()>1024){
//         $(".no-scrollable").mCustomScrollbar({theme:"dark"}); //apply scrollbar with your options
//     }else{
//         $(".no-scrollable").mCustomScrollbar("destroy"); //destroy scrollbar
//         console.log('destroy')
//     }
// }).trigger("resize");
