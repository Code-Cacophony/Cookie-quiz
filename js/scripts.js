$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();
    var tv = parseInt($("#tv").val());
    var vacation = parseInt($("#vacation").val());
    var robbery = parseInt($("#robbed").val());
    var book = parseInt($("#book").val());

    if (tv === 0 || vacation === 0 || robbery === 0 || book === 0) {
      $("#error").show();
    } else if (tv === 1 && vacation === 6 && robbery === 11 && book === 16) {
      $("#choc").show();
    } else if (tv === 2 && vacation === 8 && robbery === 12 && book === 19) {
      $("#birthday").show();
    } else if (tv === 5 && vacation === 9 && robbery === 13 && book === 20) {
      $("#mnm").show();
    } else if (tv === 3 && vacation === 7 && robbery === 15 && book === 19) {
      $("#loft").show();
    } else {
      $("#ron").show();
    }
  });
});