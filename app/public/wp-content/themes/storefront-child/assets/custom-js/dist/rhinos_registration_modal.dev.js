"use strict";

jQuery(document).ready(function ($) {
  var modal = document.getElementById('modal-content');
  var btn = document.getElementById('user_connect');
  var close = document.getElementsByClassName('close')[0];
  var submitBtn = document.getElementById('wp-submit');
  var loginForm = document.getElementById('loginform');
  btn.addEventListener('click', function () {
    modal.style.display = "block";
    $('.modal-header h2').text("Log In");
  });
  close.addEventListener('click', function () {
    modal.style.display = "none";
  });
  submitBtn.addEventListener('click', function () {
    modal.style.display = "none";
    console.log('match');
  });
});