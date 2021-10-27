jQuery(document).ready(function($){
    let modal = document.getElementById('modal-content');
    let btn = document.getElementById('user_connect');
    let close = document.getElementsById('close')[0];
    let submitBtn= document.getElementById('wp-submit');
    let loginForm=document.getElementById('loginform');

    btn.addEventListener('click',()=>{
      modal.style.display="block";
      console.log('match');
      $('.modal-header h2').text(`Log In`);
    });
    close.addEventListener('click',()=>{
      modal.style.display="none";     
    });