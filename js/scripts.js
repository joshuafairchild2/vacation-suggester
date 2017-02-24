$(document).ready(function() {
  $("select").children("option:first-child").hide();
  //to hide the "Pick one" options from the DOM

  $("#q1").submit(function(event) {
    var input1 = $("#name").val();
    if (input1 === "") {
      $("#q1-alert").text("Please enter your name");
    } else {
      $("#q1").hide();
      $("#q2").show();
    }
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
    var input3 = $("#dob").val();
    if (input3 === "") {
      $("#q3-alert").text("Please enter your date of birth");
    } else {
      $("#q3").hide();
      $("#q4").show();
    }
    event.preventDefault();
  });

  $("#q4").submit(function(event) {
    var input4 = parseInt($("#color").val());
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
    var q4Input = parseInt($("#color").val());
    var q5Input = parseInt($("#activity").val());
    var totalPoints = (q2Input + q4Input + q5Input);

    if (q5Input === 1) {
      $("#q5-alert").text("Please make a selection");
    } else {
      $("#q5").hide();
      $("#redo").show();
      if (totalPoints <= 22) {
        $("#vacation1").show();
      } else if (totalPoints >= 23 && totalPoints <=26) {
        $("#vacation2").show();
      } else if (totalPoints >= 27 && totalPoints <= 31) {
        $("#vacation3").show();
      } else if (totalPoints >= 32) {
        $("#vacation4").show();
      }
    }
    $(".user-name").text(q1Input);
    event.preventDefault();
  });

  $("#redo").click(function() {
    $(".vacation").hide();
    $(".red-text").hide();
    $("#q1").show();
    $("#redo").hide();

    //the loops below are to clear the five form entries when the user clicks the redo button
    //how might i consolidate the two loops into a single forEach using a single if/else?
          //
    var questions = ["#name", "#dob"];
    questions.forEach(function(question) {
      if ($(question)) {
        $(question).val("");
      }
    });

    var selectQuestions = ["#season", "#color", "#activity"]
    selectQuestions.forEach(function(selectQuestion) {
      if ($(selectQuestion) !== 1) {
        $(selectQuestion).val(1);
      }
    });
  });
});
