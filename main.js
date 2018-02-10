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

//Ubuntu
$(function () {
  if (localStorage.getItem('title2')) {
    $('#title2').val(localStorage.getItem('title2'));
  }
  $('#clear').click(function () {
    $('#title2').val(' Q. Ubuntuコンソールを立ち上げていますか？');
    localStorage.removeItem('title2');
  });
  $('#title2').bind('keyup', function () {
    localStorage.setItem('title2', $('#title2').val());
  });
});

$(function () {
  if (localStorage.getItem('Q21')) {
    $('#Q21').val(localStorage.getItem('Q21'));
  }
  $('#clear').click(function () {
    $('#Q21').val(' 1. すでに立ち上げている');
    localStorage.removeItem('Q21');
  });
  $('#Q21').bind('keyup', function () {
    localStorage.setItem('Q21', $('#Q21').val());
  });
});

$(function () {
  if (localStorage.getItem('Q22')) {
    $('#Q22').val(localStorage.getItem('Q22'));
  }
  $('#clear').click(function () {
    $('#Q22').val(' 2. 立ち上げているところだ');
    localStorage.removeItem('Q22');
  });
  $('#Q22').bind('keyup', function () {
    localStorage.setItem('Q22', $('#Q22').val());
  });
});

$(function () {
  if (localStorage.getItem('Q23')) {
    $('#Q23').val(localStorage.getItem('Q23'));
  }
  $('#clear').click(function () {
    $('#Q23').val(' 3. インストール中');
    localStorage.removeItem('Q23');
  });
  $('#Q23').bind('keyup', function () {
    localStorage.setItem('Q23', $('#Q23').val());
  });
});

$(function () {
  if (localStorage.getItem('Q24')) {
    $('#Q24').val(localStorage.getItem('Q24'));
  }
  $('#clear').click(function () {
    $('#Q24').val(' 4. テキストのリンクからちょっとインストールしてくる');
    localStorage.removeItem('Q24');
  });
  $('#Q24').bind('keyup', function () {
    localStorage.setItem('Q24', $('#Q24').val());
  });
});

$(function () {
  if (localStorage.getItem('memo')) {
    $('#memo').val(localStorage.getItem('memo'));
  }
  $('#clearMemo').click(function () {
    $('#memo').val('');
    localStorage.removeItem('memo');
  });
  $('#memo').bind('keyup', function () {
    localStorage.setItem('memo', $('#memo').val());
  });
});







/*
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
*/