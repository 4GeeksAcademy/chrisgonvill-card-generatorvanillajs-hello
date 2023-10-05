/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"];
  const denominations = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const cardElement = document.querySelector(".card");
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomDenomination =
    denominations[Math.floor(Math.random() * denominations.length)];

  cardElement.querySelector(".top-suit").innerHTML = randomSuit;
  cardElement.querySelector(".denomination").innerHTML = randomDenomination;
  cardElement.querySelector(".bottom-suit").innerHTML = randomSuit;
  cardElement
    .querySelector(".top-suit")
    .classList.add(getSuitClass(randomSuit));
  cardElement
    .querySelector(".bottom-suit")
    .classList.add(getSuitClass(randomSuit));
};

function getSuitClass(suit) {
  if (suit === "♦" || suit === "♥") {
    return "hearts";
  } else if (suit === "♠" || suit === "♣") {
    return "spades";
  }
}
