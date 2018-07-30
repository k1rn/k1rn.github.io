(function(){
    'use strict';

    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let result = document.getElementById('result');
    let startTime;
    let isStarted = false;

    start.addEventListener('click', function(){
        if (isStarted === true){
            return;
        }
        isStarted = true;
        startTime = Date.now();
        this.className = 'pushed';
        stop.className = '';
    });
    
    stop.addEventListener('click', function(){
        let elapsedTime;
        let diff;
        if (isStarted === false){
            return;
        }
        isStarted = false;
        elapsedTime = (Date.now() - startTime) / 1000;
        this.className = 'pushed';
        start.className = '';
        diff = elapsedTime -5.0;

        result.textContent = elapsedTime.toFixed(3);

        diff = elapsedTime - 5.0;
        if(diff > -1.0 && diff < 1.0 ){
            result.className = 'perfect';
        }else if(diff > -2.0 && diff < 2.0){
            result.className = 'regrettable';
        }else{
            result.className = '';
        }
    });
})();