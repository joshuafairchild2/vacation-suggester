

$(document).ready(function() {
  $("select").children("option:first-child").hide();



  $("#q1").submit(function(event) {
    $("#q1").hide();
    $("#q2").show();

    event.preventDefault();
  });

  $("#q2").submit(function(event) {
    $("#q2").hide();
    $("#q3").show();

    event.preventDefault();
  });

  $("#q3").submit(function(event) {
    $("#q3").hide();
    $("#q4").show();

    event.preventDefault();
  });

  $("#q4").submit(function(event) {
    $("#q4").hide();
    $("#q5").show();

    event.preventDefault();
  });

  $("#q5").submit(function(event) {
    $("#q5").hide();

    var q2Input = parseInt($("#season").val());
    var q4Input = parseInt($("#activities").val());
    var q5Input = parseInt($("#travel").val());
    var totalPoints = (q2Input + q4Input + q5Input);

    if (totalPoints <= 6) {
      $("#vacation1").show();
    } else if (totalPoints >= 7 && totalPoints <=12) {
      $("#vacation2").show();
    } else if (totalPoints >=13) {
      $("#vacation3").show();
    }

    var nameInput = $("#name").val();
    $(".user-name").text(nameInput);
    event.preventDefault();
  });
});
