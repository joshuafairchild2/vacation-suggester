$(document).ready(function() {
  $("select").children("option:first-child").hide();

  var formNumbers = ["1", "2", "3", "4"];
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
        $("#form" + formNumber).slideUp("fast");
        $("#form" + nextQuestion).slideDown("slow");
      }
      event.preventDefault();
    });
  });

  $("#form5").submit(function(event) {
    var q1Input = $("#q1").val();
    var q2Input = parseInt($("#q2").val());
    var q4Input = parseInt($("#q4").val());
    var q5Input = parseInt($("#q5").val());
    var totalPoints = (q2Input + q4Input + q5Input);

    if (q5Input === 1) {
      $(".red-text").text("Please provide a valid answer");
    } else {
      $("#form5").slideUp("fast");
      $(".red-text").empty();
      $("#redo").slideDown();
      $(".user-name").text(q1Input);
      if (totalPoints <= 22) {
        $("#vacation1").slideDown("slow");
      } else if (totalPoints >= 23 && totalPoints <=26) {
        $("#vacation2").slideDown("slow");
      } else if (totalPoints >= 27 && totalPoints <= 31) {
        $("#vacation3").slideDown("slow");
      } else if (totalPoints >= 32) {
        $("#vacation4").slideDown("slow");
      }
    }
    event.preventDefault();
  });

  $("#redo").click(function() {
    $(".vacation, #redo").slideUp("fast");
    $('form').each(function() {
      $(this).trigger('reset');
    });
    $("#form1").slideDown("slow");
  });
});
