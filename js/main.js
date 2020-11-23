$(document).ready(function(){
//     $('.k-menu').click(function() {
//         console.log('klik');
//     });

// $($('.main-menu-item').get().reverse()).each(function(index){
//     /* $(this).css({paddingLeft: '30px'}); */
//     $(this).css({paddingLeft: 15*index + 'px'});

// });

$('.nav-menu-click').click(function(){
    $('.nav-menu-holder').toggleClass('open');

});

let dancesArray = ['krakowskie', 'lubelskie', 'góralskie', 'Księstwo Warszawskie', 'imprezy', 'dzieci', 'młodzież', 'dorośli', 'rzeszowskie'];

let array1 = [5, 15, 35, 6, 2, 32]
console.log(array1.length);
let array2 = array1.filter(myFunction);

function myFunction(value, index) {
    return index > 2;
}

console.log(array2);
    
})



