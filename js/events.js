//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt(){
  $('#typing').on('keydown', function(k){
    if (k.key === 'G') {
      alert('You have entered "G" ')
    } else {
      //alert('You have pressed a different key')
    }
  })
}

// function submitIt(){
//
//   alert('Your form is going to be submitted now')
// }

$(document).ready(function(){
// call functions here

getIt();
frameIt();
pressIt();
// submitIt();
});
