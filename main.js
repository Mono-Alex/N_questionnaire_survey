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

$(function () {
  $('#nav1 li a').hover(
    function () {
      $(this).find('span').stop().animate({ 'marginRight': '175px' }, 500);
    },
    function () {
      $(this).find('span').stop().animate({ 'marginRight': '0px' }, 300);
    }
  );
});

function color1() {
  document.body.style.backgroundColor = "#FFCCFF";
  document.getElementById("title").style.color = "#000080";
}
function color2() {
  document.body.style.backgroundColor = "#8EF1FF";
  document.getElementById("title").style.color = "#000080";
}
function color3() {
  document.body.style.backgroundColor = "#FF773E";
  document.getElementById("title").style.color = "#363636";
}
function color4() {
  document.body.style.backgroundColor = "#b3aeae";
  document.getElementById("title").style.color = "#363636";
}