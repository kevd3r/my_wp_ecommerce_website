jQuery(document).ready(function($){
    let modal = document.getElementById('modal-content');
    let btn = document.getElementById('user_connect');
    let close = document.getElementById('close');
    let modalLogin=document.getElementById('modal-body');
    let logoutButton= document.getElementById('logout-button');
    let modalLogout= document.getElementById('modal-logout');
    let newUser =document.getElementById('new-user');
    let modalNewUser=document.getElementById('modal-new-user');

    btn.addEventListener('click',()=>{
      modal.style.display="block";
      modalLogout.style.display="none";
      modalNewUser.style.display="none";
      console.log('match');
      $('.modal-header h2').text(`Log In`);
    });

    close.addEventListener('click',()=>{
      modal.style.display="none";
      modalNewUser.style.display="none";  
      console.log('match again');   
    });

    logoutButton.addEventListener('click', ()=>{
      modalLogin.style.display="none";
      modalLogout.style.display="block";
      console.log('yeaaaaaaah !');
    })

    newUser.addEventListener('click',()=>{
      console.log('WTF ?!!!')
      modalLogin.style.display="none";
      modalLogout.style.display="none";
      modalNewUser.style.display="block";
    })
});