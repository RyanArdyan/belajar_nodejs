// const nama = "Ardyan";
// const cetakNama = (nama) => `Hai, nama saya ${nama}`;
// console.log(cetakNama('Shisui'));

// const fs = require('fs'); // Core Module
// const cetakNama = require('./coba.js'); // Local Module
// const moment = require('moment'); // Third Party Module / NPM Module

// console.log("Hello Ryan");
// const cetakNama = require('./coba');
// const PI = require('./coba')

const coba = require(`./coba`);
console.log(coba.cetakNama(`Ryan`), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());
// console.log(cetakNama(`Ryan Uchiha`), PI);
