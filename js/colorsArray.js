let colorsArray = [
  "#34568B",
  "#FF6F61",
  "#6B5B95",
  "#88B04B",
  "#F7CAC9",
  "#92A8D1",
  "#955251",
  "#B565A7",
  "#009B77",
  "#DD4124",
  "#D65076",
  "#45B8AC",
  "#EFC050",
  "#5B5EA6",
  "#9B2335",
  "#55B4B0",
  "#BC243C",
  "#C3447A",
  "#98B4D4",
];

function generateRandomColor() {
  let elements = document.getElementsByClassName("colorChanger");

  let random = Math.floor(Math.random() * colorsArray.length);

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].tagName == "HR") {
      elements[i].style.backgroundColor = colorsArray[random];
    } else if (elements[i].tagName == "BUTTON") {
      elements[i].style.backgroundColor = colorsArray[random];
    } else {
      elements[i].style.color = colorsArray[random];
    }
  }
}

setInterval(generateRandomColor, 300);

module.exports = generateRandomColor();
