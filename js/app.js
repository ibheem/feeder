$('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4'],
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
  });
  
  //adding the actions to the buttons
  $(document).on('click', '#destroy', function(){
    //default is 700. 
    $.fn.fullpage.destroy('all');
  });
  
  
  $(function () {
    $(document).on('touchmove', function () {
        $(document).trigger('mousewheel');
    });
    if ($(window).height() > 760) {
        $('.win_height').height($(window).height());
    }
    $(this).scrollTop(0);
    let selector = {
        container_id: 'showcase',
        max_repeats: 5,
        video_audio: [{
                selector: '[data-_video=1]',
                action: 'play/pause',
                length: 2000
            },
            {
                selector: '[data-_video=2]',
                action: 'play/pause',
                length: 2000
            },
            {
                selector: '[data-_video=3]',
                action: 'play/pause',
                length: 2000
            },
            {
                selector: '[data-_video=4]',
                action: 'play/pause',
                length: 2000
            }
        ],
        input_arr: [
            [{
                    selector: 'data-_fiber=',
                    action: [{
                            act: 'remove',
                            class: 'run-animation',
                        }, {
                            act: 'add',
                            class: 'run-animation',
                        }],
                    delay: 500,
                    parent: 'slide1'
                },
                {
                    selector: 'data-_fiber=',
                    action: [{
                            act: 'remove',
                            class: 'run-animation',
                        }, {
                            act: 'add',
                            class: 'run-animation',
                        }],
                    delay: 500,
                    parent: 'slide1'
                }
            ],
            [{
                    selector: 'data-_fiber=',
                    action: [{
                            act: 'remove',
                            class: 'run-animation',
                        }, {
                            act: 'add',
                            class: 'run-animation',
                        }],
                    class: '',
                    delay: 500,
                    parent: 'slide2'
                },
                {
                    selector: 'data-_fiber=',
                    action: [{
                            act: 'remove',
                            class: 'run-animation',
                        }, {
                            act: 'add',
                            class: 'run-animation',
                        }],
                    class: '',
                    delay: 500,
                    parent: 'slide2'
                }
            ],
            [{
                    selector: 'data-_fiber=',
                    action: [{
                            act: 'remove',
                            class: 'run-animation',
                        }, {
                            act: 'add',
                            class: 'run-animation',
                        }],
                    class: '',
                    delay: 500,
                    parent: 'slide3'
                },
                {
                    selector: 'data-_fiber=',
                    action: [{
                            act: 'remove',
                            class: 'run-animation',
                        }, {
                            act: 'add',
                            class: 'run-animation',
                        }],
                    class: '',
                    delay: 500,
                    parent: 'slide3'
                }
            ],
            [{
                    selector: 'data-_fiber=',
                    action: [{
                            act: 'remove',
                            class: 'run-animation',
                        }, {
                            act: 'add',
                            class: 'run-animation',
                        }],
                    class: '',
                    delay: 500,
                    parent: 'slide4'
                },
                {
                    selector: 'data-_fiber=',
                    action: [{
                            act: 'remove',
                            class: 'run-animation',
                        }, {
                            act: 'add',
                            class: 'run-animation',
                        }],
                    class: '',
                    delay: 500,
                    parent: 'slide4'
                }
            ],
            [{
                    selector: 'data-_fiber=',
                    action: [{
                            act: 'remove',
                            class: 'run-animation',
                        }, {
                            act: 'add',
                            class: 'run-animation',
                        }],
                    class: '',
                    delay: 500,
                    parent: 'slide5'
                },
                {
                    selector: 'data-_fiber=',
                    action: [{
                            act: 'remove',
                            class: 'run-animation',
                        }, {
                            act: 'add',
                            class: 'run-animation',
                        }],
                    class: '',
                    delay: 500,
                    parent: 'slide5'
                }
            ]
        ]
    };
    //scroll binder element (declaration)
    let box;

    let lastScrollTop = 0;
    var keys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };

    function preventDefault(e) {
        e = e || box.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (box.addEventListener) // older FF
            box.addEventListener('DOMMouseScroll', preventDefault, false);
        box.onwheel = preventDefault; // modern standard
        box.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        box.ontouchmove = preventDefault; // mobile
        box.onkeydown = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (box.removeEventListener)
            box.removeEventListener('DOMMouseScroll', preventDefault, false);
        box.onmousewheel = document.onmousewheel = null;
        box.onwheel = null;
        box.ontouchmove = null;
        document.onkeydown = null;
    }




    function _process_input(_selector) {
        this._selector = _selector.container_id;
        this._previous = {};
        this._current = {};
        this._next = {};
        this._repeater = 0;
        this._duration = 0;
        this._max_repeats = _selector.max_repeats;
        this._video_length = 0;
        this._length = _selector.input_arr.length;
        this._input_arr = _selector.input_arr;
        this._video_audio = _selector.video_audio;
        this._run_length = {
            _duration: 0,
            _video_length: 0
        };
    }
    _process_input.prototype.onScroll = (z, i) => {
        $(document).on('scroll');
        enableScroll();
    };
    _process_input.prototype.offScroll = (z, i) => {
        $(document).off('scroll');
        disableScroll();
    };
    _process_input.prototype.pauseVideo = (z, i) => {
        let myVideo = document.getElementById("play");
        if (!myVideo.paused) {
            myVideo.paused();
        }
        return true;
    };
    _process_input.prototype.playVideo = (z, i) => {
        console.log("play" + i);
        let myVideo = document.getElementById("play_1");
        if (myVideo.paused) {
            myVideo.play();
        }
        return true;
    };
    _process_input.prototype.initLoad = (z, i) => {

    };
    _process_input.prototype.calcVidLength = (z, i) => {
        for (let i = 0; i < z._video_audio.length; i++) {
            z._video_length += z._video_audio[i].length;
        }
    };
    _process_input.prototype.calcDelay = (z, i) => {
        for (let k = 0; k < z._input_arr[i].length; k++) {
            z._duration += z._input_arr[i][k].delay;
        }
    };
    _process_input.prototype.animatorDown = (z, i) => {
        // console.log('yhan pe' + i);
        //console.log(z);
        for (let k = 0; k < z._input_arr[i].length; k++) {
            console.log("running for " + '[' + z._input_arr[i][k].selector + i + ']' + " " + '#slide' + (i + 1));
            // for (let j = 0; j < z._input_arr[i][k].action.length; j++) {

            //     // switch (z._input_arr[i][k].action[j].act) {
            //     //     case 'remove':
            //     //     $(z._input_arr[i][k].selector).addClass(''+z._input_arr[i][k].action[j].class);
            //     //         break;
            //     //     case 'add':
            //     //     $(z._input_arr[i][k].selector).removeClass(''+z._input_arr[i][k].action[j].class);
            //     //         break;
            //     //     case 'toggle':
            //     //     $(z._input_arr[i][k].selector).toggleClass(''+z._input_arr[i][k].action[j].class);
            //     //         break;
            //     // }
            // }
            for (let l = 0; l < z._max_repeats; l++) {
                $('#slide' + (l + 1)).addClass('hidden');
                $("body").removeClass('slide' + (l + 1));
            }
            $("body").addClass('slide' + (i + 1));
            $('#slide' + (i + 1)).removeClass('hidden');

            for (let h = 0; h < z._max_repeats; h++) {
                for (let j = 0; j < z._input_arr[h][k].action.length; j++) {
                    if (h !== i) {
                        switch (z._input_arr[h][k].action[j].act) {
                            case 'add':
                                $('[' + z._input_arr[h][k].selector + h + ']').removeClass('' + z._input_arr[h][k].action[j].class);
                                break;
                        }
                    }
                }
            }
            for (let j = 0; j < z._input_arr[i][k].action.length; j++) {
                setTimeout(function () {
                    switch (z._input_arr[i][k].action[j].act) {
                        case 'remove':
                            $('[' + z._input_arr[i][k].selector + i + ']').removeClass('' + z._input_arr[i][k].action[j].class);
                            break;
                        case 'add':
                            $('[' + z._input_arr[i][k].selector + i + ']').addClass('' + z._input_arr[i][k].action[j].class);
                            break;
                        case 'toggle':
                            $('[' + z._input_arr[i][k].selector + i + ']').toggleClass('' + z._input_arr[i][k].action[j].class);
                            break;
                    }

                }, z._input_arr[i][k].delay);
            }


        }

    };


    //initiator block
    (function () {
        let scene = new _process_input(selector);
        box = document.querySelector('#' + scene._selector);
        disableScroll();
        scene.calcDelay(scene, 0);
        const getInit = new Promise((resolve, reject) => {
            scene.animatorDown(scene, scene._repeater);
            setTimeout(() => {
                resolve(scene.playVideo(scene, scene._repeater));
            }, scene._duration);
        });


        getInit
                .then(flag => {
                    // console.log(flag);
                    scene._repeater = 1;
                    return (getScroll(scene._repeater));
                });

        // called when scrolling up and down 
        function getScroll(i) {
            $(window).on('scroll');
            $(window).bind("wheel");
            $(window).one('wheel mousewheel', function (event) {
                if (event.originalEvent.wheelDelta >= 0) {
                    //console.log('up' + i + " " + scene._repeater);
                    switch (i) {
                        case 0:
                            // scene._repeater = 1;
                            // scene.animatorDown(scene, scene._repeater);
                            // setTimeout(() => {
                            getInScroll(scene._repeater);
                            // }, scene._duration);
                            break;
                        case 1:
                            scene._repeater = 0;
                            scene.animatorDown(scene, scene._repeater);
                            setTimeout(() => {
                                getInScroll(scene._repeater);
                            }, scene._duration);
                            break;
                        case 2:
                            scene._repeater = 1;
                            scene.animatorDown(scene, scene._repeater);
                            setTimeout(() => {
                                getInScroll(scene._repeater);
                            }, scene._duration);
                            break;
                        case 3:
                            scene._repeater = 2;
                            scene.animatorDown(scene, scene._repeater);
                            setTimeout(() => {
                                getInScroll(scene._repeater);
                            }, scene._duration);
                            break;
                        case 4:
                            scene._repeater = 3;
                            scene.animatorDown(scene, scene._repeater);
                            setTimeout(() => {
                                getInScroll(scene._repeater);
                            }, scene._duration);

                            break;
                        case 5:
                            scene._repeater = 4;
                            scene.animatorDown(scene, scene._repeater);
                            setTimeout(() => {
                                getInScroll(scene._repeater);
                            }, scene._duration);

                            break;
                    }
                } else {
                    //console.log('down' + i + " " + scene._repeater);
                    //scene._repeater = i;
                    if (scene._repeater < scene._max_repeats && scene._repeater >= 0) {
                        scene.animatorDown(scene, scene._repeater);
                        setTimeout(() => {
                            if (scene._repeater == 0)
                                scene.playVideo(scene, scene._repeater);
                            scene._repeater++;
                            getScroll(scene._repeater);
                        }, scene._duration);
                    } else {
                        setTimeout(() => {
                            getNextScroll();
                        }, 100);
                    }
                }
            });

        }

        // called after 4th slide

        function getNextScroll() {
            $(window).unbind('mousewheel');
            enableScroll();
            var iScrollPos = 0;
            //console.log('moving after 4th slide');
            $(window).on('scroll', function () {
                var iCurScrollPos = $(this).scrollTop();
                if (iCurScrollPos > iScrollPos) {
                    // console.log("down_nextScroll");
                } else {
                    // console.log('up_nextScroll');
                    if (this.scrollY < $('.showcase').height()) {
                        $('body,html').animate({
                            scrollTop: 0
                        }, 500);
                        $(window).off('scroll');
                        disableScroll();
                        setTimeout(() => {
                            $(window).bind('mousewheel');
                            disableScroll();
                            getScroll(scene._repeater);
                        }, 700);
                    }
                }
                iScrollPos = iCurScrollPos;
            });
            // window.onscroll = function (e) {
            //     if (this.oldScroll > this.scrollY) {
            //         console.log('up');
            //         if (this.scrollY < $('.showcase').height()) {
            //             $('body,html').animate({
            //                 scrollTop: 0
            //             }, 500);
            //             disableScroll();
            //             setTimeout(() => {
            //                 getScroll(scene._repeater);
            //             }, 700);
            //         }
            //     } else {
            //         console.log("down");
            //     }
            //     this.oldScroll = this.scrollY;
            // }
        }

        // called if wheel is up on 1st slide
        function getInScroll(i) {
            getScroll(i);
        }

        $('[data-nav=slide]').click(function () {
            scene._repeater = $(this).data('slide');
            for (let i = 0; i < scene._max_repeats; i++) {
                if (i !== (scene._repeater - 1)) {
                    $('#slide' + (i + 1)).addClass('hidden');
                }
            }
            $('#slide' + (scene._repeater)).removeClass('hidden');
            scene.animatorDown(scene, (scene._repeater - 1));
            setTimeout(() => {
                if (scene._repeater == 0)
                    scene.playVideo(scene, scene._repeater);
                scene._repeater++;
                getScroll(scene._repeater);
            }, scene._duration);
        });
    })()

    //  console.clear();

    // nav slider




    // swipe
    
    $('.play-btn').click(function () {
        let myVideo = document.getElementById("play_story");
        if (myVideo.paused) {
            myVideo.play();
        } else {
            myVideo.pause();
        }

        $(this).find('i').each(function () {
            if ($(this).hasClass('hidden')) {
                $(this).removeClass('hidden')
            } else {
                $(this).addClass('hidden')
            }
        });
        toggleFullScreen(myVideo);
    });
    function toggleFullScreen(e) {
        if (!document.mozFullScreen && !document.webkitFullScreen) {
            if (e.mozRequestFullScreen) {
                e.mozRequestFullScreen();
            } else {
                e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else {
                document.webkitCancelFullScreen();
            }
        }
    }
    $('.play_vid').click(function () {
        let myVideo = document.getElementById($(this).data('target'));
        if (myVideo.paused) {
            myVideo.play();
            $(this).find('li').each(function () {
                switch ($(this).data('id')) {
                    case 'call':
                        $(this).find('span').each(function () {
                            $(this).html('Pause');
                        });
                        break;
                    case 'play':
                        $(this).addClass('hidden');
                        break;
                    case 'pause':
                        $(this).removeClass('hidden');
                        break;
                }
            });
        } else {
            myVideo.pause();
            $(this).find('li').each(function () {
                switch ($(this).data('id')) {
                    case 'call':
                        $(this).find('span').each(function () {
                            $(this).html('Play');
                        });
                        break;
                    case 'play':
                        $(this).removeClass('hidden');
                        break;
                    case 'pause':
                        $(this).addClass('hidden');
                        break;
                }
            });
        }

    });
});
