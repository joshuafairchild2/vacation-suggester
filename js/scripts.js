

$(document).ready(function() {
  $("select").children("option:first-child").hide();

  $("#q1").submit(function(event) {
    $("#q1").hide();
    $("#q2").show();

    event.preventDefault();
  });

  $("#q2").submit(function(event) {
    var input2 = parseInt($("#season").val());
    if (input2 === 1) {
      $("#q2-alert").text("Please make a selection");
    } else {
      $("#q2").hide();
      $("#q3").show();
    }
    event.preventDefault();
  });

  $("#q3").submit(function(event) {
    $("#q3").hide();
    $("#q4").show();

    event.preventDefault();
  });

  $("#q4").submit(function(event) {
    var input4 = parseInt($("#activities").val());
    if (input4 === 1) {
      $("#q4-alert").text("Please make a selection");
    } else {
      $("#q4").hide();
      $("#q5").show();
    }
    event.preventDefault();
  });

  $("#q5").submit(function(event) {
    var q1Input = $("#name").val();
    var q2Input = parseInt($("#season").val());
    var q3Input = $("#dob").val();
    var q4Input = parseInt($("#activities").val());
    var q5Input = parseInt($("#travel").val());
    var totalPoints = (q2Input + q4Input + q5Input);

    if (q5Input === 1) {
      $("#q5-alert").text("Please make a selection");
    } else {
      $("#q5").hide();
      if (totalPoints <= 8) {
        $("#vacation1").show();
      } else if (totalPoints >= 9 && totalPoints <=12) {
        $("#vacation2").show();
      } else if (totalPoints >=13) {
        $("#vacation3").show();
      }
    }
    $(".user-name").text(q1Input);
    event.preventDefault();
  });
});
