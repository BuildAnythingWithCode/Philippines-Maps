'use strict';

const submitRouteBtn = document.querySelector('.main-button');
let accountExists;

submitRouteBtn.addEventListener('click', function () {
  if (accountExists) {
    alert(
      'Thank you for your interest in Philippines Maps! We hope to offer the ability to submit routes soon.',
    );
  } else {
    alert('Account creation functionality will be added soon!');
  }
});

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
