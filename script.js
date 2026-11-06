// ==UserScript==
// @name Replace Thumbnail
// @namespace LittleDeng
// @version 1
// @description Replace thumbnail from Soundcloud and Apple Music
// @author LitttleDeng
// @match https://is1-ssl.mzstatic.com/*
// @match https://i1.sndcdn.com/artworks-*-*-t500x500.jpg
// @grant none
// ==/UserScript==

if (location.href.match("bb-100.jpg")) {
location.href = location.href.replace("bb-100.jpg", "bb-50.jpg");
}

if (location.href.match("t500x500.jpg")) {
location.href = location.href.replace("t500x500.jpg", "original.jpg");
}

if (location.href.match("t500x500.png")) {
location.href = location.href.replace("t500x500.png", "original.png");
}

if (location.href.match("bb-100.png")) {
location.href = location.href.replace("bb-100.png", "bb-50.jpg");
}
