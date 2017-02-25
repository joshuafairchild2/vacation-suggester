$(document).ready(function() {
  $("select").children("option:first-child").hide();
  //above: hide the "Pick one" options from the DOM while keeping them as placeholder text

  var formNumbers = ["1", "2", "3", "4"]
  //above: should this line be above the doc.ready function or does it matter? also see comment on line 63
  formNumbers.forEach(function(formNumber ) {
    $("#form" + formNumber).submit(function(event) {
      var input = $("#q" + formNumber).val();
      if (input === "" || input === "1") {
        $(".red-text").text("Please provide a valid answer")
      } else {
        var formNumberVal = parseInt(formNumber);
        var nextQuestionVal = formNumberVal += 1;
        var nextQuestion = nextQuestionVal.toString();
        $(".red-text").empty();
        $("#form" + formNumber).hide();
        $("#form" + nextQuestion).show();
      }
      event.preventDefault();
    });
  });
  //above: check question for invalid entry, hide answered question, show next question, repeat for questions 1-4

  $("#form5").submit(function(event) {
    var q1Input = $("#q1").val();
    var q2Input = parseInt($("#q2").val());
    var q4Input = parseInt($("#q4").val());
    var q5Input = parseInt($("#q5").val());
    var totalPoints = (q2Input + q4Input + q5Input);

    if (q5Input === 1) {
      $(".red-text").text("Please provide a valid answer");
    } else {
      $("#form5").hide();
      $(".red-text").empty();
      $("#redo").show();
      $(".user-name").text(q1Input);
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
    event.preventDefault();
  });
  //above: determine and display proper vacation info

  $("#redo").click(function() {
    $(".vacation").hide();
    $("#redo").hide();
    var formNumbers = ["1", "2", "3", "4", "5"];
    formNumbers.forEach(function(formNumber) {
      $("#form" + formNumber).trigger("reset");
    });
    $("#form1").show();
  });
  //above: hide vacation info, any error messages and "redo" button then reset forms 1-5 and show question 1
  //is it okay to locally redefine a variable that has global scope? i.e. line 56 and line 5
});
