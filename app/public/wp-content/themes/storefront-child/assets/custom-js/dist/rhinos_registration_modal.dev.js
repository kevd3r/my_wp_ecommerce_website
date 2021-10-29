"use strict";

jQuery(document).ready(function ($) {
  /**----------  Variables for modal's gestion */
  var modal = document.getElementById('modal-content');
  /**get the modal header's datas */

  var btn = document.getElementById('user_connect');
  var close = document.getElementById('close');
  /** modal's first display to log in with email & login */

  var modalLogin = document.getElementById('modal-body');
  var logoutButton = document.getElementById('logout-button');
  /**modal's logout screen display */

  var modalLogout = document.getElementById('modal-logout');
  var newUser = document.getElementById('new-user');
  /** modal's new user screen display*/

  var modalNewUser = document.getElementById('modal-new-user');
  var userLogin = document.getElementById('user_login');
  /** get the 1st & 2nd passwords' id's because of a conflict
   * with same id's
   */

  var newUserLogin = document.querySelectorAll('#modal-body>#loginform>.login-password>input');
  var tmp = [];
  var newId;
  newUserLogin.forEach(function (e) {
    tmp.push(e.getAttribute('id'));
    console.log(e);
    newId = e.getAttribute('id');
  });
  console.log(newId);
  btn.addEventListener('click', function () {
    modal.style.display = "block";
    modalLogout.style.display = "none";
    modalNewUser.style.display = "none";
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
  });
  newUser.addEventListener('click', function () {
    modalLogin.style.display = "none";
    modalLogout.style.display = "none";
    modalNewUser.style.display = "block";
  });
});