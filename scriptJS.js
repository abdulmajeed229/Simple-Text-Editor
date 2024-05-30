
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

    text.style.color = 'blue';

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