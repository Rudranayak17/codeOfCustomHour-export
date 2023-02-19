import React from "react";
import ReactDom from "react-dom";
const date = new Date(2023, 2, 19, 17);
const currentTime = date.getHours();
let greeting;
const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good morning ";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "good afternoon";
  customStyle.color = "green";
} else {
  greeting = "good night";
  customStyle.color = "blue";
}

ReactDom.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
