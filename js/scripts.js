$(document).ready(function() {
  $("form#formDiv").submit(function(event) {
    event.preventDefault();

    var inputOne = $("#sideOne").val();
    var inputTwo = $("#sideTwo").val();
    var inputThree = $("#sideThree").val();
    var sideOne = parseInt(inputOne);
    var sideTwo = parseInt(inputTwo);
    var sideThree = parseInt(inputThree);
    var triangle = {
      side1: sideOne,
      side2: sideTwo,
      side3: sideThree,
      type: function()  {
        if ((sideOne !== sideTwo) && (sideTwo !== sideThree)) {
          return "Scalene"
          } else if ((sideOne === sideTwo) && (sideTwo === sideThree)) {
            return "Equilateral";
          } else {
            return "Isosceles";
          }
        }
      };

      var numberArray = [sideOne, sideTwo, sideThree];
      var sortedArray = numberArray.sort();
      console.log(sortedArray);

      if ((sortedArray[0] + sortedArray[1]) >= sortedArray[2]) {
        if (triangle.type() === "Scalene") {
          $("ul#scaUl").append("<li>" + sideOne + ", " + sideTwo + ", " + sideThree  + "</li>")
        } else if (triangle.type() === "Equilateral") {
          $("ul#eqUl").append("<li>" + sideOne + ", " + sideTwo + ", " + sideThree  + "</li>")
        } else  {
          $("ul#isoUl").append("<li>" + sideOne + ", " + sideTwo + ", " + sideThree  + "</li>")
        }
      } else  {
        alert("Bad dog!");
      }



 });
});
