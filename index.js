let kill = (function(){
    let timer;
    function clickX(){
        let Xbutton = document.querySelector('.ytp-ad-overlay-close-button');
        if(!!Xbutton){
            console.log(Xbutton);
            Xbutton.click();
        }
    }
        function video(){
            let countdown = document.querySelector('.ytp-ad-preview-container.countdown-next-to-thumbnail');
            let skip = document.querySelector('.ytp-ad-skip-button .ytp-button');
            if(!!countdown || !!skip){
                console.log(countdown+"\n"+skip);
                let video = document.querySelector('.html5-video-container > .video-stream');
                video.currentTime = video.getDuration();
            }
        }
        function init(){
            clickX();
            video();
        }
    function start(){
        timer = setInterval(init, 1000);
    }
    function stop(){
        clearInterval(timer);
    }
    return {
        start: start,
        stop: stop,
    };
})();