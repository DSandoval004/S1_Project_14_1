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
// DFUNC: function to be loaded when the page is loaded
window.addEventListener('load', setStyles)

function setStyles() {
      // DVARL:
      var size = 5,
            styleNum = Math.floor((size) * Math.random()),
            styleSheet = document.createElement('link'),
            figBox = document.createElement('figure'),
            thumbStyles = document.createElement('style');
      // DVARO:
      styleSheet.setAttribute('rel', "stylesheet");
      styleSheet.setAttribute('id', "fancySheet");
      styleSheet.setAttribute('href', `na_style_${styleNum}.css`);
      // DDOES:
      document.head.appendChild(styleSheet);
      document.head.appendChild(thumbStyles);
      // DVARO:
      figBox.setAttribute('id', "styleThumbs");
      document.getElementById('box').appendChild(figBox);
      // DLOOP:
      for (var i = 0; i < size; i++) {
            // DVARO:
            var sheetImg = document.createElement('img');
            sheetImg.setAttribute('src', `na_small_${i}.png`);
            sheetImg.setAttribute('alt', `${i}`);
            // DDOES:
            sheetImg.addEventListener('click', function (e) {
                  styleSheet.setAttribute('href', `na_style_${e.target.alt}.css`);
            });
            // DDOES:
            figBox.appendChild(sheetImg);
      }
      // DDOES:
      document.styleSheets[document.styleSheets.length - 1].insertRule("figure#styleThumbs { \
            position: absolute; \
            left: 0px; \
            bottom: 0px; \
      }", 0);
      // DDOES:
      document.styleSheets[document.styleSheets.length - 1].insertRule("figure#styleThumbs img { \
            outline: 1px solid black; \
            cursor: pointer; \
            opacity: 0.75; \
      }", 1);
      // DDOES:
      document.styleSheets[document.styleSheets.length - 1].insertRule("figure#styleThumbs img:hover { \
            outline: 1px solid red; \
            opacity: 1.0; \
      }", 2);
};