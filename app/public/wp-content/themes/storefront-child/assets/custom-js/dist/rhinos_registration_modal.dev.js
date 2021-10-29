"use strict";

jQuery(document).ready(function ($) {
  /**----------  Variables for modal's gestion */
  var modal = document.getElementById('modal-content');
  /**get the modal header's datas */

  var btn = document.getElementById('user_connect');
  var close = document.getElementById('close');
  /** modal's first display to log in with email & login */

  btn.addEventListener('click', function () {
    modal.style.display = "block";
    $('.modal-header h2').text("Log In");
  });
  close.addEventListener('click', function () {
    modal.style.display = "none";
    console.log('match again');
  });
});