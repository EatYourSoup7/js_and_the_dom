function displayPresidents() {
  

  var presidents = [
    { id: 1, name: "George Washington", years: "1789 - 1797"},
    { id: 2, name: "John Adams", years: "1979 - 1801"},
    { id: 3, name: "Thomas Jefferson", years: "1801 - 1809"}
  ];

  var presidentsList = "";
  presidents.forEach(function(president) {
    presidentsList += `<li><h2>${ president.name } - ${ president.years }</h2></li>`;
  });

  var presidentsElement = document.querySelector(".presidents");
  presidentsElement.innerHTML = presidentsList;
}

function changeBackgroundColor() {
  var bodyTag = document.querySelector("body");
  console.log(bodyTag);
  var colorString = "#"

  for (var i = 0; i < 6; i++) {
    var hexCharacters = "0123456789ABCDEF"
    var randomIndex = Math.floor((Math.random() * hexCharacters.length) + 0);
    var character = hexCharacters[randomIndex];
    colorString += character;
  }

  bodyTag.style.backgroundColor = colorString;

}

function mouseHover(event) {
  console.log("X coordinate: ", event.clientX);
  console.log("Y coordinate: ", event.clientY);

  var xCoordSpan = document.querySelector(".x-coord");
  var yCoordSpan = document.querySelector(".y-coord");
  xCoordSpan.innerHTML = event.clientX;
  yCoordSpan.innerHTML = event.clientY;

};