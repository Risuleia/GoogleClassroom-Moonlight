// ==UserScript==
// @name        Google Classroom - Moonlight
// @namespace   Violentmonkey Scripts
// @match       https://classroom.google.com/*
// @grant       none
// @version     2.0
// @author      Risuleia
// @icon        https://i.pinimg.com/originals/98/d3/a2/98d3a283f98cded8e639957e935bd373.png
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @license     MIT
// @description Custom theme for Google Classroom
// ==/UserScript==

// ============ START ============ //
(function() {
    'use strict';

    var style = `
/* css */
@import url('https://raw.githubusercontent.com/Risuleia/GoogleClassroom-Moonlight/main/Google%20Classroom%20-%20Moonlight.css');
`;

    var elem = document.createElement('style');
    elem.type = 'text/css';
    elem.innerText = style;
    document.head.appendChild(elem);
})();

// ============ END ============ //
