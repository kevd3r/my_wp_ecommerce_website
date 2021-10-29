jQuery(document).ready(function($){
  /**----------  Variables for modal's gestion */
    let modal = document.getElementById('modal-content');
    /**get the modal header's datas */
    let btn = document.getElementById('user_connect');
    let close = document.getElementById('close');
    /** modal's first display to log in with email & login */
    let modalLogin=document.getElementById('modal-body');
    let logoutButton= document.getElementById('logout-button');
    /**modal's logout screen display */
    let modalLogout= document.getElementById('modal-logout');
    let newUser =document.getElementById('new-user');
    /** modal's new user screen display*/
    let modalNewUser=document.getElementById('modal-new-user');
    let userLogin = document.getElementById('user_login');  
    /** get the 1st & 2nd passwords' id's because of a conflict
     * with same id's
     */
    let bouton=document.getElementById('test-button');


    let newUserLogin= document.querySelectorAll('#modal-body>#loginform>.login-password>input');
    let tmp=[];
    let newId;
    newUserLogin.forEach(function(e){
      tmp.push(e.getAttribute('id'));
      console.log(e);
      newId = e.getAttribute('id');
    })
    console.log(newId);
    newId= "_pass";
    console.log(newId);

    btn.addEventListener('click',()=>{
      modal.style.display="block";
      modalLogout.style.display="none";
      modalNewUser.style.display="none";
      $('.modal-header h2').text(`Log In`);
    });

    close.addEventListener('click',()=>{
      modal.style.display="none";
      modalNewUser.style.display="none";  
      console.log('match again');   
    });

    newUser.addEventListener('click',()=>{
      console.log('WTF ?!!!')
      modalLogin.style.display="none";
      modalLogout.style.display="none";
      modalNewUser.style.display="block";
    })

    bouton.addEventListener('click',()=>{
      if (modalLogin.parentNode){
        modalLogin.parentNode.removeChild(modalLogin);
      }
      console.log('yeeeehaaaaaaaaaaaaaaaaaaaaaaaaa!');
    })
});