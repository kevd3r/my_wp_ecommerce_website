"use strict";

jQuery(document).ready(function ($) {
  var modal = document.getElementById('modal-content');
  var btn = document.getElementById('user_connect');
  var close = document.getElementById('close');
  var modalLogin = document.getElementById('modal-body');
  var logoutButton = document.getElementById('logout-button');
  var modalLogout = document.getElementById('modal-logout');
  var newUser = document.getElementById('new-user');
  var modalNewUser = document.getElementById('modal-new-user');
  btn.addEventListener('click', function () {
    modal.style.display = "block";
    modalLogout.style.display = "none";
    modalNewUser.style.display = "none";
    console.log('match');
    $('.modal-header h2').text("Log In");
  });
  close.addEventListener('click', function () {
    modal.style.display = "none";
    modalNewUser.style.display = "none";
    console.log('match again');
  });
  logoutButton.addEventListener('click', function () {
    modalLogin.style.display = "none";
    modalLogout.style.display = "block";
    console.log('yeaaaaaaah !');
  });
  newUser.addEventListener('click', function () {
    console.log('WTF ?!!!');
    modalLogin.style.display = "none";
    modalLogout.style.display = "none";
    modalNewUser.style.display = "block";
  });
});