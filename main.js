let strikeThroughs = document.querySelector('ol');


    strikeThroughs.addEventListener('click', function(event){
        event.target.style.textDecoration = 'line-through'
    })

    //////////////////////////////////////////////////////////////

 let fadeAways = document.querySelector('ul');


    fadeAways.addEventListener('click', function(event){
        event.target.style.opacity = 0
    })

    ////////////////////////////////////////////////////////////

    let collapse = document.querySelector('#destroy-all');
    let dinoPics = document.querySelectorAll('#row img')
    let dinoPictures = document.querySelector('#row')

    dinoPictures.addEventListener('click', function(event){
        event.target.style.width = '0px'
    })

    let allStrikeThroughs = document.querySelectorAll('ol li');
    let allFadeAways = document.querySelectorAll('ul li');

    collapse.addEventListener('click', function(){
        for(let i = 0; i < dinoPics.length; i++){
            dinoPics[i].style.width = '0px'
        }
        for(let i = 0; i < allStrikeThroughs.length; i++){
            allStrikeThroughs[i].style.textDecoration = 'line-through'
        }
        for(let i = 0; i < allFadeAways.length; i++){
            allFadeAways[i].style.opacity = 0
        }

    })
    
