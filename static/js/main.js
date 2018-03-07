"use strict";
console.log("Main.js loaded");

// testing if jQuery works
$(document).ready(function() {
  $('.container2').hide();
  $('#button').on('click', function(event) {
    event.preventDefault(); // To prevent following the link (optional)
    $('.container2').toggle();
  });
});
