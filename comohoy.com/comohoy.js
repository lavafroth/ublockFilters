// ==UserScript==
// @name         Bypass redirect
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bypasses redirect via comohoy.com/out.html
// @author       lavafroth
// @match        *://pornleaks.in/*
// @icon         https://comohoy.com/favicon.png
// @license      MIT
// ==/UserScript==
(function() {
    'use-strict';

    window.addEventListener('load', function() {
        document.querySelectorAll('a[href^="https://comohoy.com"][href*="url="]').forEach(tag => tag.href = atob((new URLSearchParams(new URL(tag.href).search)).get('url')))
    }, false);
})();
