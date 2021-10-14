jQuery(document).ready(function( $ ){
 
    console.log('heyyyyyy!!!!');
    let modal = document.getElementById('modal-content');
    let btn = document.getElementById('user_connect');
    let span = document.getElementsByClassName('close')[0];
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let notMember = document.getElementById('not_member_yet');
    btn.addEventListener('click',()=>{
      modal.style.display="block";
      firstName.style.display='none';
      lastName.style.display= 'none';
    })
    notMember.addEventListener('click',()=>{
      firstName.style.display='flex';
      lastName.style.display= 'flex';
      notMember.style.display='none';
      $('.modal-header h2').text(`let's create your account and discover the benefits`);
    })
    span.addEventListener('click',()=>{
      modal.style.display="none";
      $('.modal-header h2').text(`Log In`);
      notMember.style.display='block';
    })
  });
  

