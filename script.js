'use strict';

const submitRouteBtn = document.querySelector('.main-button');
let accountExists;

submitRouteBtn.addEventListener('click', function () {
  if (accountExists) {
    alert(
      'Thank you for your interest in Philippines Maps! We hope to offer the ability to submit routes soon.',
    );
  } else {
    alert('You must create an account in order to submit a route.');
  }
});
