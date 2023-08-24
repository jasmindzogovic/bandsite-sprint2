"use strict";

// Creating variables for page elements
const commentsSection = document.querySelector(".comments__section");
const form = document.getElementById("form");
const formName = document.getElementById("formName");
const formComment = document.getElementById("comments");
const formButton = document.querySelector(".form__button");
const imgContainer = document.querySelector(".photo-gallery__images-container");
const main = document.querySelector(".main");
const header = document.querySelector(".header");

// Date function

const dateInFull = function () {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const mins = String(date.getMinutes()).padStart(2, 0);

  return `${String(month + 1).padStart(2, 0)}.${day}.${year}, ${hour}:${mins}`;
};

// Function to capitalize first letter

const toCapitalize = function (nameString) {
  const nameInput = String(nameString).split(" ");
  const [firstName, lastName] = [...nameInput];
  const [fullFirst, fullLast] = [
    firstName[0].toUpperCase() + firstName.slice(1),
    lastName[0].toUpperCase() + lastName.slice(1),
  ];
  const fullName = fullFirst.concat(" ", fullLast);
  return fullName;
};

// Clearing the input fields on click
formName.addEventListener("focus", () => {
  formName.placeholder = "";
});

formName.addEventListener("blur", () => {
  formName.placeholder = "Enter your name";
});

formComment.addEventListener("focus", () => {
  formComment.placeholder = "";
});

formComment.addEventListener("blur", () => {
  formComment.placeholder = "Enter your comment";
});

// Variable for initial comment

const lorem20 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

// Comment generating function

const commentGenerator = function (name, comment) {
  const newDiv = document.createElement("div");
  newDiv.className = "comment__dynamic";
  commentsContainer.appendChild(newDiv);

  const nameInComment = document.createElement("p");
  nameInComment.className = "comment__name-generated";
  newDiv.appendChild(nameInComment);
  nameInComment.textContent = toCapitalize(name);

  const contentInComment = document.createElement("p");
  contentInComment.className = "comment__dynamic-content";
  newDiv.appendChild(contentInComment);
  contentInComment.textContent = comment;

  const dateInComment = document.createElement("p");
  dateInComment.className = "comment__date";
  newDiv.appendChild(dateInComment);
  dateInComment.textContent = dateInFull();
};

// Creating new elements on page through js

const formAndCommentContainer = document.createElement("section");
formAndCommentContainer.className = "app__container";
commentsSection.appendChild(formAndCommentContainer);

formAndCommentContainer.appendChild(form);

const commentsContainer = document.createElement("div");
commentsContainer.className = "comments__container";
commentsSection.appendChild(commentsContainer);

const newContainer = document.createElement("div");
newContainer.className = "comment__container";
commentsContainer.appendChild(newContainer);

commentGenerator("David Sorensen", lorem20);

// Event listener function to create a new comment

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (formName.value === "" || formComment.value === "") {
    alert(`Please input name and comment`);
  } else if (!formName.value.includes(" ")) {
    alert(`Please input full name`);
  } else {
    const userComment = setTimeout(() => {
      commentGenerator(formName.value, formComment.value);

      formName.value = "";
      formName.style.border = "1px solid #E1E1E1";
      formComment.value = "";
    }, 1000);
    return userComment;
  }
});

// Intersection Observer API for images section

const obsFn = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  imgContainer.style.opacity = "1";
  imgContainer.style.transform = "translateY(15px)";
  imgContainer.style.transition = "all .2s ease-in-out";

  observer.unobserve(imgContainer);
};

const obsOptions = {
  root: null,
  threshold: 0.3,
};

const observer = new IntersectionObserver(obsFn, obsOptions);

observer.observe(imgContainer);

// Intersection Observer API for navbar

const navFn = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  header.style.position = "fixed";
  header.style.width = "100%";
  header.style.zIndex = "5";

  navObserver.unobserve(main);
};

const navOptions = {
  root: null,
  threshold: 0.35,
  rootMargin: "0px",
};

const navObserver = new IntersectionObserver(navFn, navOptions);

navObserver.observe(main);
