

var user = prompt("Set a Player Name");
document.getElementById("rocker").innerHTML = user;
//player 1 selection.

// $("radio").on("click", function () {
//     $("rock").show();
// })
$('input[type="radio"]').on("click", function () {
    $("div.player1").hide();
    var radioValue = $(this).attr("value");


})
    // $("")
// }

// )
