"use strict";

jQuery(document).ready(function ($) {
  console.log('heyyyyyy!!!!');
  var modal = document.getElementById('modal-content');
  var btn = document.getElementById('user_connect');
  var span = document.getElementsByClassName('close')[0];
  btn.addEventListener('click', function () {
    modal.style.display = "block";
  });
  span.addEventListener('click', function () {
    modal.style.display = "none";
  });
});