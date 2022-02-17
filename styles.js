$(document).ready(() => {
  // Creates <div class="row">, appends to <div class="container">
  $(".container").append(
    '<div class="row justify-content-center" id="row3"></div>'
  );
  // Creates <ul>, appends to <div class="container">
  $("#row3").append(`<ul class="list-group col-4 ml-3" id="myList"></ul>`);

  $("#inputTxt").keyup(() => {
    if ($("#inputTxt").val() !== "") {
      $("#btnSubmit").attr("disabled", false); // <input disabled="false">
    }
  })
    var $button1 = $("<button>Click Me</button>")
      .attr("id", "btn1")
      .appendTo("body");

    $("#btn1").click(function () {
      alert("Good Job Nicholas!");
    });

    $("<div><div>").attr({ name: "emptydiv", id: "div" }).appendTo("body");

    $("#btn2").click(function () {
      var $text = $("#textbox").val();
      alert($text);
    });

    $("#hoverDiv").css({
      "background-color": "black",
      height: "100px",
      width: "100px",
    });

    $("#hoverDiv").hover(function () {
      $("#hoverDiv").css("background-color", "green");
      $("#hoverDiv").mouseleave(function () {
        $("#hoverDiv").css("background-color", "black");
      });
    });

    $("#btn3").click(function () {
      $("<span>" + $("#div").attr("name") + "</span>").appendTo(div);
    });

    $("#btnSubmit").click(() => {
      if ($("#inputTxt").val() !== "") {
        // Creates <li>, appends to #myList
        $("#myList").append(
          `<li class="list-group-item">${$("#inputTxt").val()}</li>`
        );
        $("#inputTxt").val(""); // Clear!

        const myColors = [
          "#007bff",
          "#6c757d",
          "#28a745",
          "#dc3545",
          "#ffc107",
          "#17a2b8",
          "#f8f9fa",
          "#343a40",
        ];

        // Randomly selects an index from myColors, assigns value to myRandomColor
        const getRandomColor = () => {
          const myRandomColor =
            myColors[Math.floor(Math.random() * myColors.length)];
          return myRandomColor;
        };

        // .click() event handler method on <li>
        $("li").click((event) => {
          const thisRandomColor = getRandomColor();
          $(event.target).css("background-color", thisRandomColor);
        });

        // .dblclick() event handler method on <li>
        $("li").dblclick((event) => {
          $(event.target).remove();
        });
      }
    });
    // //with already created button and ul in html, click on button to list friends
    var friends = [
      "Basil",
      "Rachel",
      "Cana",
      "Judy",
      "Sam",
      "Timothy",
      "Marsha",
    ];
    var count = 0;
    $("#btn4").click(function () {
      if (count < 7) {
        $("<li class = 'friends'></li>").text(friends[count]).appendTo("#ul");
        count++;
        $('.friends').click(function(){
          var colors = ['red', 'orange', 'yellow', 'blue', 'green', 'purple'];
          var random = Math.floor(Math.random() * colors.length);
          $('.friends').css('color', colors[random]);
      })

      $('li').dblclick((event) => {
        $(event.target).remove();
    })
      }
    });

    

});
