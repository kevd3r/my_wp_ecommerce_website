jQuery(document).ready(function($){
  /**----------  Variables for modal's gestion */
    let modal = document.getElementById('modal-content');
    /**get the modal header's datas */
    let btn = document.getElementById('user_connect');
    let close = document.getElementById('close');
    /** modal's first display to log in with email & login */
   
    btn.addEventListener('click',()=>{
      modal.style.display="block";
      $('.modal-header h2').text(`Log In`);
    });

    close.addEventListener('click',()=>{
      modal.style.display="none";
      console.log('match again');   
    });
});