$(document).ready(function() {
  $("select").children("option:first-child").hide();
  //above: hide the "Pick one" options from the DOM while keeping them as placeholder text

  var formNumbers = ["1", "2", "3", "4"]
  //above: should this line be above the doc.ready function or does it matter? also see comment on line 63
  formNumbers.forEach(function(formNumber ) {
    $("#form" + formNumber).submit(function(event) {
      var input = $("#q" + formNumber).val();
      if (input === "" || input === "1") {
        $(".red-text").text("Please provide a valid answer");
      } else {
        var formNumberVal = parseInt(formNumber);
        var nextQuestionVal = formNumberVal += 1;
        var nextQuestion = nextQuestionVal.toString();
        $(".red-text").empty();
        $("#form" + formNumber).slideUp();
        $("#form" + nextQuestion).slideDown();
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
      $("#form5").slideUp();
      $(".red-text").empty();
      $("#redo").slideDown();
      $(".user-name").text(q1Input);
      if (totalPoints <= 22) {
        $("#vacation1").slideDown();
      } else if (totalPoints >= 23 && totalPoints <=26) {
        $("#vacation2").slideDown();
      } else if (totalPoints >= 27 && totalPoints <= 31) {
        $("#vacation3").slideDown();
      } else if (totalPoints >= 32) {
        $("#vacation4").slideDown();
      }
    }
    event.preventDefault();
  });
  //above: check for valid entry, hide question 5, determine and display proper vacation info

  $("#redo").click(function() {
    $(".vacation").slideUp();
    $("#redo").slideUp();
    var formNumbers = ["1", "2", "3", "4", "5"];
    formNumbers.forEach(function(formNumber) {
      $("#form" + formNumber).trigger("reset");
    });
    $("#form1").slideDown();
  });
  //above: hide vacation info and "redo" button, reset forms 1-5 and show question 1
  //is it okay to locally redefine/reuse a variable as i do in line 56? (original var @ line 5)
});
