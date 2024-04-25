"use strict";

const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();

  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

////////////////////////////////////////////
const songDeco = (song) => {
  return song.replace(/(WUB)+/g, "").trim();
};
console.log(songDeco("AWUBBWUBC"));

const songs = (song) => song.split("WUB").filter(Boolean).join("");
console.log(songs("AWUBBWUBC"));

const reverse = (x) => {
  const max = Math.pow(2, 31) - 1;
  const min = -1 * Math.pow(2, 31);
  const arr = Math.abs(x).toString().split("");
  const reversed = Math.sign(x) * Number(arr.reverse().join(""));
  return reversed < min || reversed > max ? 0 : reversed;
};
console.log(reverse(321));

const removeDuplicates = (num) => {
  num = [...new Set("")];
};
console.log(removeDuplicates(1, 1, 2));
