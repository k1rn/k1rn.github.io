(function(){
    'use strict'

    let btn = document.getElementById('btn');

    btn.addEventListener('click' , function(){
        let results = ['大吉','中吉','凶','末吉'];
        // let n = Math.floor(Math.random() * 4); 
        let n = Math.floor(Math.random() * results.length);
        this.textContent = results[n];

        // switch(n){
        //     case 0:
        //         this.textContent = '大吉';
        //         break;
        //     case 1:
        //         this.textContent = '中吉';
        //         break;
        //      case 2:
        //         this.textContent = '凶';
        //         break;
        // }

        // if(n ===0){
        //     this.textContent = '大吉';
        // }else if(n === 1){
        //     this.textContent = '中吉';
        // }else{
        //     this.textContent = '凶';
        // }
        // this.textContent = n;
    });
    btn.addEventListener('mousedown' , function(){
        this.className = 'pushed';
    });
    btn.addEventListener('mouseup' , function(){
        this.className = '';
    });
})();