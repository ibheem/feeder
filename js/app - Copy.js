$(document).ready(function () {
    let sect_anim_obj = {
        section1: [{
                id: '[data-_fiber=1]',
                add: 'run-animation',
                rem: 'run-animation',
                delay: 0
            }, {
                id: '[data-_fiber=1]',
                add: 'run-animation',
                rem: 'run-animation',
                delay: 0
            }],
        section2: [{
                id: '[data-_fiber=2]',
                add: 'run-animation',
                rem: 'run-animation',
                delay: 0
            }, {
                id: '[data-_fiber=2]',
                add: 'run-animation',
                rem: 'run-animation',
                delay: 0
            }],
        section3: [{
                id: '[data-_fiber=3]',
                add: 'run-animation',
                rem: 'run-animation',
                delay: 0
            }, {
                id: '[data-_fiber=3]',
                add: 'run-animation',
                rem: 'run-animation',
                delay: 0
            }],
        section4: [{
                id: '[data-_fiber=4]',
                add: 'run-animation',
                rem: 'run-animation',
                delay: 0
            }, {
                id: '[data-_fiber=4]',
                add: 'run-animation',
                rem: 'run-animation',
                delay: 0
            }],
        section5: [{
                id: '[data-_fiber=5]',
                add: 'run-animation',
                rem: 'run-animation',
                delay: 0
            }, {
                id: '[data-_fiber=5]',
                add: 'run-animation',
                rem: 'run-animation',
                delay: 0
            }],
        section6: [{
                id: '',
                add: '',
                rem: '',
                delay: 0
            }, {
                id: '',
                add: '',
                rem: '',
                delay: 0
            }]
    };
    let section_6 = {
        POA_1: {parent: '[data-poa=1]',
            children: [
                {id: '[data-boa=1]', type: 'img', mode: 'parallex', fire: 'fade-in', delay: 0},
                {id: '[data-boa=2]', type: 'block', mode: 'ease-in', fire: 'fade-in', delay: 0},
                {id: '[data-boa=2]', type: 'text', mode: 'trans', fire: 'fade-in', delay: 0},
            ]
        },
        POA_2: {},
        POA_3: {},
        POA_4: {},
        POA_5: {},
        POA_6: {},
        POA_7: {},
    }
    function addAnimation(e) {
        let str = e.slice(e.length - 1, e.length);
        //alert(str);
        let i = 0;
        for (keys in sect_anim_obj) {
//if (keys != 'section6') {
            if (keys.charAt(keys.length - 1) != str) {
                if (str != i) {
                    console.log(i)
                    $('[data-_fiber=' + i + ']').removeClass('' + sect_anim_obj[keys][0].rem);
                }

                i++
            }
// }
        }
        setTimeout(() => {
            for (let i = 0; i < sect_anim_obj[e].length; i++) {
                $(sect_anim_obj[e][i].id).addClass('' + sect_anim_obj[e][i].add);
            }
        }, 400);
    }

    $('#pagepiling').pagepiling({
        direction: 'vertical',
        touchSensitivity: 7,
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        sectionsColor: ['white', '#ee005a', '#2C3E50', '#2C3E50', '#2C3E50', ''],
        navigation: false,
//            normalScrollElements: '#section4',
        afterRender: function () {
            $('#pp-nav').addClass('custom');
            var winh = $(window).height();
            //alert(winh);
            $("#pagepiling,.home").css('height', winh);
            setTimeout(() => {
                addAnimation('section1');
            }, 600);
        },
        afterLoad: function (anchorLink, index) {

            switch (index) {
                case 1:

                    break;
            }

            if (index > 1) {
                $('#pp-nav').removeClass('custom');
            } else {
                $('[data-_fiber=0]').addClass('run-animation');
                $('#pp-nav').addClass('custom');
            }
            if (index === 6) {
                //$.fn.pagepiling.destroy('all');
                //window.addEventListener('load', AOS.refresh)
//                AOS.init({
//                    easing: 'ease-in-out-sine'
//                });
                var slider = $("#slider_text").slider({
                    min: 1,
                    range: false,
                    step: 1,
                    max: 100,
                    value: 1,
                    animate: "slow",
                    orientation: "horizontal",
                    slide: function (event, ui) {
                        $(".value").text("slider value: " + Math.round(ui.value));
                        $('.slider_target').css({
                            'left': -(Math.round(ui.value) * 64) + 'px',
                            'transition': 'left .5s linear'
                        });
                    },
                    stop: function (event, ui) {
                        $("#slider_text").slider('value', Math.round(ui.value));
                        if (Math.round(ui.value) == 1) {
                            $('.slider_target').animate({
                                'left': 0
                            });
                        }

                    }
                });

                $('#section6').on('scroll', function () {
                    for (obj in section_6) {
                        var hT = $('#scroll-to').offset().top,
                                hH = $('#scroll-to').outerHeight(),
                                wH = $(window).height(),
                                wS = $(this).scrollTop();
                        //console.log((hT - wH), wS);
                        /* if (wS > (hT+hH-wH)){
                         alert('you have scrolled to the h1!');
                         }*/
                        if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
                            alert('you have scrolled in the h1! area');
                        }
                    }
                });
            }
        },
        onLeave: function (index, nextIndex, direction) {
            //after leaving section 2
            if (direction == 'down') {
                switch (index) {
                    case 1:
                        addAnimation('section2');
                        console.log(nextIndex);
                        break;
                    case 2:
                        addAnimation('section3');
                        console.log(nextIndex);
                        break;
                    case 3:
                        addAnimation('section4');
                        console.log(nextIndex);
                        break;
                    case 4:
                        addAnimation('section5');
                        console.log(nextIndex);
                        break;
                    case 5:
                        console.log(nextIndex);
                        break;
                    case 6:
                        console.log(nextIndex);
                        break;
                }
            } else {
                if (direction == 'up') {
                    switch (index) {
                        case 1:
                            console.log(nextIndex);
                            break;
                        case 2:
                            addAnimation('section1');
                            console.log(nextIndex);
                            break;
                        case 3:
                            addAnimation('section2');
                            console.log(nextIndex);
                            break;
                        case 4:
                            addAnimation('section3');
                            console.log(nextIndex);
                            break;
                        case 5:
                            addAnimation('section4');
                            console.log(nextIndex);
                            break;
                        case 6:
                            addAnimation('section5');
                            console.log(nextIndex);
                            break;
                    }
                }
            }
        }
    });
});