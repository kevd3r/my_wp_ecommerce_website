jQuery(document).ready(function($){
 
    console.log('heyyyyyy!!!!');
    let modal = document.getElementById('modal-content');
    let btn = document.getElementById('user_connect');
    let close = document.getElementsByClassName('close')[0];
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let notMember = document.getElementById('not_member_yet');
    let pwd_frgt = document.getElementById('pwd_frgt');
    let pwd = document.getElementById('pwd');
    let page= document.getElementById('page');

    btn.addEventListener('click',()=>{
      modal.style.display="block";
      firstName.style.display='none';
      lastName.style.display= 'none';
      $('.modal-header h2').text(`Log In`);
      pwd_frgt.style.display='block';
      notMember.style.display='block';
      pwd.style.display='block'
    })

    notMember.addEventListener('click',()=>{
      firstName.style.display='flex';
      lastName.style.display= 'flex';
      notMember.style.display='none';
      $('.modal-header h2').text(`let's create your account and discover the benefits`);
      pwd_frgt.style.display='none';
      pwd.style.display='block';
    })

    close.addEventListener('click',()=>{
      modal.style.display="none";
      $('.modal-header h2').text(`Log In`);
      notMember.style.display='block';
      pwd_frgt.style.display='block';
    })

    pwd_frgt.addEventListener('click',()=>{
      $('.modal-header h2').text(`Forgot your password?`);
      firstName.style.display='none';
      lastName.style.display= 'none';
      pwd_frgt.style.display='none';
      pwd.style.display='none';
    })
  });
  

