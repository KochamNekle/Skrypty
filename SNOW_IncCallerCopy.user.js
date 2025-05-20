// ==UserScript==
// @name         SNOW_IncCallerCopy
// @namespace    https://github.com/KochamNekle/Skrypty
// @version      2.0.1
// @description  Kopiowanie numeru incydentu oraz numeru sklepu po kliknięciu
// @author       Krzysztof Zielonka
// @match        *://www.jm-hello.com/*
// @updateURL    https://github.com/KochamNekle/Skrypty/main/SNOW_IncCallerCopy.user.js?raw=true
// @downloadURL  https://github.com/KochamNekle/Skrypty/main/SNOW_IncCallerCopy.user.js?raw=true
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//test //test //test //test
    var INCNumber = document.getElementById("sys_readonly.incident.number");
    var INCOpenedBy = document.getElementById("incident.opened_by_label");
    var CallerNumber = document.getElementById("sys_display.incident.caller_id");

    function copyWithoutSpaces(element) {
        var copyText = element.value.replace(/\s+/g, '');
        navigator.clipboard.writeText(copyText);
    }

    INCNumber.onclick = function() {
        copyWithoutSpaces(INCNumber);
    }
    INCOpenedBy.onclick = function() {
        if (INCOpenedBy.hasAttribute('readonly')) {
        copyWithoutSpaces(INCOpenedBy);
        }
    }
    CallerNumber.onclick = function() {
        if (CallerNumber.hasAttribute('readonly')) {
        copyWithoutSpaces(CallerNumber);
        }
    }
})();
