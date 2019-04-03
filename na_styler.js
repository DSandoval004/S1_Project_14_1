"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Dego Sandoval
   Date:   April 2, 2019 (04/02/19)

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
// DDOES: Loads the setStyles function when the page is loaded
window.addEventListener('load', setStyles)
// DFUNC: function to be loaded when the page is loaded
function setStyles() {
      // DVARL: Local variables for the function
      var size = 5,
            styleNum = Math.floor((size) * Math.random()),
            styleSheet = document.createElement('link'),
            figBox = document.createElement('figure'),
            thumbStyles = document.createElement('style');
      // DVARO: Changes the stylesheet object by applying rel, id and href
      styleSheet.setAttribute('rel', "stylesheet");
      styleSheet.setAttribute('id', "fancySheet");
      styleSheet.setAttribute('href', `na_style_${styleNum}.css`);
      // DDOES: Appends the nodes to the document in the head tag
      document.head.appendChild(styleSheet);
      document.head.appendChild(thumbStyles);
      // DVARO: Changes the figbox id
      figBox.setAttribute('id', "styleThumbs");
      // DDOES: Appends the figBox to the webp page
      document.getElementById('box').appendChild(figBox);
      // DLOOP: Loops through and adds little images of the different style sheets for the user to click and change the page look.
      for (var i = 0; i < size; i++) {
            // DVARO: Create a node and chnges the src and alt attributes
            var sheetImg = document.createElement('img');
            sheetImg.setAttribute('src', `na_small_${i}.png`);
            sheetImg.setAttribute('alt', `${i}`);
            // DDOES: Applies event listerner that listen for the png are clicked on and the chanes the stylesheet to the apporiate stylesheet
            sheetImg.addEventListener('click', function (e) {
                  styleSheet.setAttribute('href', `na_style_${e.target.alt}.css`);
            });
            // DDOES: Applies the sheetImg to figBox
            figBox.appendChild(sheetImg);
      }
      // DDOES: Changes the document styleSheet and inserts style rules
      document.styleSheets[document.styleSheets.length - 1].insertRule("figure#styleThumbs { \
            position: absolute; \
            left: 0px; \
            bottom: 0px; \
      }", 0);
      document.styleSheets[document.styleSheets.length - 1].insertRule("figure#styleThumbs img { \
            outline: 1px solid black; \
            cursor: pointer; \
            opacity: 0.75; \
      }", 1);
      document.styleSheets[document.styleSheets.length - 1].insertRule("figure#styleThumbs img:hover { \
            outline: 1px solid red; \
            opacity: 1.0; \
      }", 2);
};