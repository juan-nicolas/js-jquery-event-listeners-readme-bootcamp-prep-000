//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    // $('img').addClass('tasty');
    console.log('this should work')
  })
}
$(document).ready(function(){
// call functions here

getIt();
frameIt();
});
