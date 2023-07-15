"use strict";

// Creating variables for page elements
const commentsSection = document.querySelector(".comments__section");
const formName = document.getElementById("formName");
const formComment = document.getElementById("comments");
const formButton = document.querySelector(".form__button");

// Clearing the input fields on click
formName.addEventListener("click", () => (formName.value = ""));

formComment.addEventListener("click", () => (formComment.value = ""));

// Creating new elements on page through js

const newDiv = document.createElement("div");
newDiv.className = "comment";
commentsSection.appendChild(newDiv);

const nameInComment = document.createElement("p");
nameInComment.className = "comment__name";
newDiv.appendChild(nameInComment);
nameInComment.textContent = "David Sorensen";

const contentInComment = document.createElement("p");
contentInComment.className = "comment__content";
newDiv.appendChild(contentInComment);
contentInComment.textContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

// Date function

const dateInFull = function () {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const hour = date.getHours();
  const mins = date.getMinutes();

  return `${month}.${day}.${year}, ${hour}:${mins}`;
};

const dateInComment = document.createElement("p");
dateInComment.className = "comment__date";
newDiv.appendChild(dateInComment);
dateInComment.textContent = dateInFull();

// Event listener function to create a new comment

formButton.addEventListener("click", function (e) {
  e.preventDefault();

  const newDiv2 = document.createElement("div");
  newDiv2.className = "comment__dynamic";
  commentsSection.appendChild(newDiv2);

  const nameInComment2 = document.createElement("p");
  nameInComment.className = "comment__dynamic-name";
  newDiv2.appendChild(nameInComment2);
  nameInComment2.textContent = formName.value;

  const contentInComment2 = document.createElement("p");
  contentInComment2.className = "comment__dynamic-content";
  newDiv2.appendChild(contentInComment2);
  contentInComment2.textContent = formComment.value;
});
