$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var suits = ["spades", "hearts", "clubs", "diamonds"];
    var ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
       newArray.push(userInput.toUpperCase());
    });

    var newArray = newArray.sort();

    newArray.forEach(function(item) {
      $(".items").append("<li>" + item + "</li>");
    });

    $("#grcery-list").show();
    $("#blanks").hide();

  });
});
