$(document).ready(function() {
  let buzzer = $("#buzzer")[0];
  let count = parseInt($("#num").html());
  let countbrk = parseInt($("#breaknum").html());
  let timer;
  let startBreak;

  // start button
  $("#start").click(function() {
    if (count > 0) {
      $("#timeType").html("Session Time");
      $("#dscreen").html(count);
      count *= 60;
      timer = setInterval(counter, 1000);

      function counter() {
        $("#start, #minusfive, #addfive, #minfivbrk, #addfivbrk").attr("disabled",true);
        count -= 1;
        if (count === 0) {
          buzzer.play();
          clearInterval(timer);
          startBreak = setInterval(breaktimer, 1000);
          countbrk = parseInt($("#breaknum").html());
          countbrk *= 60;
        }
        // format display look
        if (count % 60 >= 10) {
          $("#dscreen").html(Math.floor(count / 60) + ":" + count % 60);
        }
        else {
          $("#dscreen").html(Math.floor(count / 60) + ":" + "0" + count % 60);
        }


        // break time starts here
        function breaktimer() {

          $("#timeType").html("Break Time");
          countbrk -= 1;
          if (countbrk >= 0) {

            if (countbrk === 0) {
              buzzer.play();
              clearInterval(startBreak);
              $("#dscreen").html("00:00");
              $("#timeType").html("");
              $("#start, #minusfive, #addfive, #minfivbrk, #addfivbrk").attr("disabled",false);
              count = parseInt($("#num").html());
            }
            // format display look
            if (countbrk % 60 >= 10) {
              $("#dscreen").html(Math.floor(countbrk / 60) + ":" + countbrk % 60);
            }
            else {
              $("#dscreen").html(Math.floor(countbrk / 60) + ":" + "0" + countbrk % 60);
            }


          }
        }

      }

    }
  });

  // reset button.
  $("#reset").click(function() {
    $("#timeType").html("");
    $("#start, #minusfive, #addfive, #minfivbrk, #addfivbrk").attr("disabled",false);
    count = 25;
    countbrk = 5;
    clearInterval(timer);
    clearInterval(startBreak);

    $("#num").html(count);
    $("#breaknum").html(countbrk);
    $("#dscreen").html("00:00");
  });

  // session minus
  $("#minusfive").click(function() {
    if (count > 0) {
      count -= 1.00;
      $("#num").html(count);
    }
  });
  // session add
  $("#addfive").click(function() {
    if (count >= 0) {
      count += 1.00;
      $("#num").html(count);
    }
  });

  // break minus
  $("#minfivbrk").click(function() {
    if (countbrk > 0) {
      countbrk -= 1;
      $("#breaknum").html(countbrk);
    }
  });
  // break add
  $("#addfivbrk").click(function() {
    if (countbrk >= 0) {
      countbrk += 1;
      $("#breaknum").html(countbrk);
    }
  });

});
