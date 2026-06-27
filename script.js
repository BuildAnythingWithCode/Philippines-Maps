'use strict';

const submitRouteBtn = document.querySelector('.main-btn');
const createAccountBtn = document.querySelector('.create-account-btn');

submitRouteBtn.addEventListener('click', function () {
  alert('Route submission functionality will be added soon!');
});

createAccountBtn.addEventListener('click', function () {
  alert('Account creation functionality will be added soon!');
});

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
