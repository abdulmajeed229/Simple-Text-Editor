
let textBold = document.getElementById('bold');

let textItalic = document.getElementById('italic');

let textColor = document.getElementById('color');

let textUnderline = document.getElementById('under');

let textBig = document.getElementById('fontbig');

let textSmall = document.getElementById('fontsmall');

let text = document.getElementById('text');

let right = document.getElementById('right');


let left = document.getElementById('left');


let ceneterr = document.getElementById('centerr');

let fontsize = 16 ;

textBold.addEventListener('click', function () {

    text.style.fontWeight = 'bold';

});


textItalic.addEventListener('click', function () {

    text.style.fontStyle = 'italic';

});



textColor.addEventListener('click', function () {

    
    var userColor = prompt('Enter Color Name ! " Blue - Green - Yellow - Red " ').toLowerCase();

    if (userColor === 'blue') {

        text.style.color = 'blue';


    } if (userColor === 'green') {

        text.style.color = 'green';


    } if (userColor === 'yellow') {

        text.style.color = 'yellow';


    } if (userColor === 'red') {

        text.style.color = 'red';


    } else {
        alert('Color Not Available')
    }
});



textUnderline.addEventListener('click', function () {

    text.style.textDecoration = 'underline';

});


textBig.addEventListener('click', function () {

    fontsize += 1

    text.style.fontSize = fontsize + 'px';

});

textSmall.addEventListener('click', function () {

    fontsize -= 1

    text.style.fontSize = fontsize + 'px';

});

right.addEventListener('click' , function(){

    text.style.textAlign = 'right' ;
})

left.addEventListener('click' , function(){

    text.style.textAlign = 'left' ;
});


ceneterr.addEventListener('click' , function(){

    text.style.textAlign = 'center' ;
})
