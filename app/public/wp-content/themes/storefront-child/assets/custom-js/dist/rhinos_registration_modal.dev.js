"use strict";

jQuery(document).ready(function ($) {
  console.log('heyyyyyy!!!!');
  var modal = document.getElementById('modal-content');
  var btn = document.getElementById('user_connect');
  var span = document.getElementsByClassName('close')[0];
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var notMember = document.getElementById('not_member_yet');
  btn.addEventListener('click', function () {
    modal.style.display = "block";
    firstName.style.display = 'none';
    lastName.style.display = 'none';
  });
  notMember.addEventListener('click', function () {
    firstName.style.display = 'flex';
    lastName.style.display = 'flex';
    notMember.style.display = 'none';
    $('.modal-header h2').text("let's create your account and discover the benefits");
  });
  span.addEventListener('click', function () {
    modal.style.display = "none";
    $('.modal-header h2').text("Log In");
    notMember.style.display = 'block';
  });
});