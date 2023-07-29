"use strict";

// Selecting elements

const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const footer = document.querySelector(".footer");

// Creating shows section

const showsSection = document.createElement("section");
showsSection.className = "section__shows";
hero.append(showsSection);

const tourSectionContainer = document.createElement("div");
tourSectionContainer.className = "section__shows--tours";
showsSection.appendChild(tourSectionContainer);

const showsHeader = document.createElement("h1");
showsHeader.className = "section__shows--header";
showsHeader.textContent = "Please view tour dates:";
tourSectionContainer.appendChild(showsHeader);

// Creating tours

const tours = [
  {
    date: "7.26.2023",
    city: "Detroit, Michigan",
    time: "8:00PM",
  },
  {
    date: "7.27.2023",
    city: "New York, New York",
    time: "9:00PM",
  },
  {
    date: "7.28.2023",
    city: "Florida, Miami",
    time: "10:00PM",
  },
];

tours.forEach((tour) => {
  const tourContainer = document.createElement("div");
  tourContainer.className = "tour__container";
  tourContainer.style.backgroundColor = "#323232";
  tourContainer.style.margin = "0rem 2rem 2rem 2rem";
  tourContainer.style.color = "#FAFAFA";
  tourContainer.style.padding = ".6rem";
  tourContainer.style.borderRadius = "5px";
  tourSectionContainer.appendChild(tourContainer);

  const tourDate = document.createElement("p");
  tourDate.className = "tour__container--date";
  tourDate.textContent = tour.date;
  tourContainer.appendChild(tourDate);

  const tourCity = document.createElement("p");
  tourCity.className = "tour__container--city";
  tourCity.textContent = tour.city;
  tourContainer.appendChild(tourCity);

  const tourTime = document.createElement("p");
  tourTime.className = "tour__container--time";
  tourTime.textContent = tour.time;
  tourContainer.appendChild(tourTime);

  const tourBtn = document.createElement("button");
  tourBtn.className = "tour__container--btn";
  tourBtn.textContent = "Buy Tickets";
  tourContainer.appendChild(tourBtn);
});
