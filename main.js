/**
[main.js]

Copyright (c) [2017] [Mono-Alex]

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/
'use strict';
$(function () {
  if (localStorage.getItem('title')) {
    $('#title').val(localStorage.getItem('title'));
  }
  $('#clear').click(function () {
    $('#title').val(' Q. 練習問題できましたか？');
    localStorage.removeItem('title');
  });
  $('#title').bind('keyup', function () {
    localStorage.setItem('title', $('#title').val());
  });
});

$(function () {
  if (localStorage.getItem('Q1')) {
    $('#Q1').val(localStorage.getItem('Q1'));
  }
  $('#clear').click(function () {
    $('#Q1').val(' 1. できた');
    localStorage.removeItem('Q1');
  });
  $('#Q1').bind('keyup', function () {
    localStorage.setItem('Q1', $('#Q1').val());
  });
});

$(function () {
  if (localStorage.getItem('Q2')) {
    $('#Q2').val(localStorage.getItem('Q2'));
  }
  $('#clear').click(function () {
    $('#Q2').val(' 2. もう少し時間が欲しい');
    localStorage.removeItem('Q2');
  });
  $('#Q2').bind('keyup', function () {
    localStorage.setItem('Q2', $('#Q2').val());
  });
});

$(function () {
  if (localStorage.getItem('Q3')) {
    $('#Q3').val(localStorage.getItem('Q3'));
  }
  $('#clear').click(function () {
    $('#Q3').val(' 3. できない');
    localStorage.removeItem('Q3');
  });
  $('#Q3').bind('keyup', function () {
    localStorage.setItem('Q3', $('#Q3').val());
  });
});

$(function () {
  if (localStorage.getItem('Q4')) {
    $('#Q4').val(localStorage.getItem('Q4'));
  }
  $('#clear').click(function () {
    $('#Q4').val(' 4. できる状況ではない');
    localStorage.removeItem('Q4');
  });
  $('#Q4').bind('keyup', function () {
    localStorage.setItem('Q4', $('#Q4').val());
  });
});