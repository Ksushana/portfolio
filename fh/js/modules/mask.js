// 'use strict';

// (function () {
//   var inp = document.getElementById('tel');

//   if (!inp) {
//     return;
//   }

//   inp.onclick = function () {
//     inp.value = '+';
//   };

//   var old = 0;

//   inp.onkeydown = function () {
//     var curLen = inp.value.length;

//     if (curLen < old) {
//       old--;
//       return;
//     }

//     if (curLen === 2) {
//       inp.value = inp.value + '(';
//     }

//     if (curLen === 6) {
//       inp.value = inp.value + ')-';
//     }

//     if (curLen === 11) {
//       inp.value = inp.value + '-';
//     }

//     if (curLen === 14) {
//       inp.value = inp.value + '-';
//     }

//     if (curLen > 16) {
//       inp.value = inp.value.substring(0, inp.value.length - 1);
//     }

//     old++;
//   };
// })();


// (function () {
//   var input = document.getElementById('tel-1');

//   input.onclick = function () {
//     input.value = '+';
//   };

//   if (!input) {
//     return;
//   }

//   var old1 = 0;

//   input.onkeydown = function () {
//     var curLen = input.value.length;

//     if (curLen < old1) {
//       old1--;
//       return;
//     }

//     if (curLen === 2) {
//       input.value = input.value + '(';
//     }

//     if (curLen === 6) {
//       input.value = input.value + ')-';
//     }

//     if (curLen === 11) {
//       input.value = input.value + '-';
//     }

//     if (curLen === 14) {
//       input.value = input.value + '-';
//     }

//     if (curLen > 16) {
//       input.value = input.value.substring(0, input.value.length - 1);
//     }

//     old1++;
//   };
// })();
// Inputmask({"mask": "+7 (999) 999-9999"}).mask('#tel');

// var phoeee = document.querySelector('#tel')

// console.log(phoeee.inputmask.unmaskedvalue().len);

