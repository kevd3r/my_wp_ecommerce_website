"use strict";

jQuery(document).ready(function ($) {
  var modal = document.getElementById('modal-content');
  var btn = document.getElementById('user_connect');
  var close = document.getElementsByClassName('close')[0];
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var notMember = document.getElementById('not_member_yet');
  var pwd_frgt = document.getElementById('pwd_frgt');
  var pwd = document.getElementById('pwd');
  var page = document.getElementById('page');
  var subBtn = document.getElementById('subBtn');
  btn.addEventListener('click', function () {
    modal.style.display = "block";
    firstName.style.display = 'none';
    lastName.style.display = 'none';
    $('.modal-header h2').text("Log In");
    pwd_frgt.style.display = 'block';
    notMember.style.display = 'block';
    pwd.style.display = 'block';
    $('#subBtn p').text('Submit');
  });
  notMember.addEventListener('click', function () {
    firstName.style.display = 'flex';
    lastName.style.display = 'flex';
    notMember.style.display = 'none';
    $('.modal-header h2').text("let's create your account and discover the benefits");
    pwd_frgt.style.display = 'none';
    pwd.style.display = 'block';
    $('#subBtn p').text('Submit');
  });
  close.addEventListener('click', function () {
    modal.style.display = "none";
    $('.modal-header h2').text("Log In");
    notMember.style.display = 'block';
    pwd_frgt.style.display = 'block';
  });
  pwd_frgt.addEventListener('click', function () {
    $('.modal-header h2').text("Forgot your password?");
    firstName.style.display = 'none';
    lastName.style.display = 'none';
    pwd_frgt.style.display = 'none';
    pwd.style.display = 'none';
    $('#subBtn p').text('Resend email');
  });
});