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
  {
    date: "7.29.2023",
    city: "Los Angeles, California",
    time: "10:00PM",
  },
];

tours.forEach((tour) => {
  const html = `<div class="tour__container">
<p class="tour__container--date">${tour.date}</p>
<p class="tour__container--city">${tour.city}</p>
<p class="tour__container--time">${tour.time}</p>
<button class="tour__container--btn">Buy Tickets</button>
</div>`;

  tourSectionContainer.insertAdjacentHTML("afterend", html);
});
