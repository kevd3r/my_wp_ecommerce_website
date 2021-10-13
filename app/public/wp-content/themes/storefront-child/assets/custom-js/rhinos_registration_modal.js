jQuery(document).ready(function( $ ){
 
    console.log('heyyyyyy!!!!');
    let modal = document.getElementById('modal-content');
    let btn = document.getElementById('user_connect');
    let span = document.getElementsByClassName('close')[0];
    btn.addEventListener('click',()=>{
      modal.style.display="block";
    })
    span.addEventListener('click',()=>{
      modal.style.display="none";
    })
  });


