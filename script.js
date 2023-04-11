var Airtable = require("airtable");
var base = new Airtable({
   apiKey:"keyCteapyZ1OyWKMD"
}).base("appgp5WUx7Qk5bSfm");

// create empty array to use later for filters
let locations = [];

// find the parent container element to which we will append each record
let container = document.querySelector(".content-container");

base("Table 1").select({
    maxRecords: 50,
    view: "Grid view",
  })
  .eachPage(function page(records, fetchNextPage) {
    console.log("records:", records);
    records.forEach(function (record) {
      // pull my airtable data
      // each record will have its own div
      let airtableItem = document.createElement("div");
      // add some data specific meta to my new divs for filtering
      airtableItem.classList.add("airtable-item");
      airtableItem.setAttribute("data-Location", record.fields.Location);

      // create a img tag for my album art
      let bag = document.createElement("img");
      bag.src = record.fields.image[0].url;
      // create a span for my artist name
      let Name = document.createElement("span");
      Name.innerHTML = record.fields.Name;

      // appending to div holding each airtable record
      airtableItem.append(bag);
      airtableItem.append(Name);
      // append div to body
      document.body.append(airtableItem);
    });
  });

// set up a event listener for my empowering button
// listen for user clicker, once it is clicker, serach for divs with data-mood, empowering

// get our button using css ID
// assign a event listener to my button to listen for click
let ManhattanFilterBtn = document.getElementById("Manhattan");
ManhattanFilterBtn.addEventListener("click", function (event) {
  console.log("this is filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-mood contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");

  // search for data-mood, containg empowering
  listofAirtableItems.forEach(function searchManhattanFilter(item) {
    // if item.dataset.mood equal to "Empowering, then we trigger something
    if (item.dataset.location == "Manhattan") {
      // if the div has data-mood empowering, add red background by adding css class
      item.classList.add("filter-show");
      console.log(item);
    } else {
      item.classList.add("filter-hide");
    }
  });
});

let BrooklynFilterBtn = document.getElementById("Brooklyn");
BrooklynFilterBtn.addEventListener("click", function (event) {
  console.log("this is filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-mood contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");

  // search for data-mood, containg empowering
  listofAirtableItems.forEach(function searchBrooklynFilter(item) {
    // if item.dataset.mood equal to "Empowering, then we trigger something
    if (item.dataset.location == "Brooklyn") {
      // if the div has data-mood empowering, add red background by adding css class
      item.classList.add("filter-show");
      console.log(item);
    } else {
      item.classList.add("filter-hide");
    }
  });
});

let QueensFilterBtn = document.getElementById("Queens");
QueensFilterBtn.addEventListener("click", function (event) {
  console.log("this is filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-mood contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");

  // search for data-mood, containg empowering
  listofAirtableItems.forEach(function searchQueensFilter(item) {
    // if item.dataset.mood equal to "Empowering, then we trigger something
    if (item.dataset.location == "Queens") {
      // if the div has data-mood empowering, add red background by adding css class
      item.classList.add("filter-show");
      console.log(item);
    } else {
      item.classList.add("filter-hide");
    }
  });
});

let SeattleFilterBtn = document.getElementById("Seattle");
SeattleFilterBtn.addEventListener("click", function (event) {
  console.log("this is filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-mood contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");

  // search for data-mood, containg empowering
  listofAirtableItems.forEach(function searchSeattleFilter(item) {
    // if item.dataset.mood equal to "Empowering, then we trigger something
    if (item.dataset.location == "Seattle") {
      // if the div has data-mood empowering, add red background by adding css class
      item.classList.add("filter-show");
      console.log(item);
    } else {
      item.classList.add("filter-hide");
    }
  });
});

let MarylandFilterBtn = document.getElementById("Maryland");
MarylandFilterBtn.addEventListener("click", function (event) {
  console.log("this is filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-mood contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");

  // search for data-mood, containg empowering
  listofAirtableItems.forEach(function searchMarylandFilter(item) {
    // if item.dataset.mood equal to "Empowering, then we trigger something
    if (item.dataset.location == "Maryland") {
      // if the div has data-mood empowering, add red background by adding css class
      item.classList.add("filter-show");
      console.log(item);
    } else {
      item.classList.add("filter-hide");
    }
  });
});

let ALLFilterBtn = document.getElementById("ALL");
ALLFilterBtn.addEventListener("click", function (event) {
  console.log("this is filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-mood contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");

  // search for data-mood, containg empowering
  listofAirtableItems.forEach(function ALLFilter(item) {
    item.classList.remove("filter-hide");
    item.classList.add("filter-show");
  });
});

const holographicElement = document.getElementById("holographic");

function updateHolographicBackground(value) {
  const percentage = value * 100;
  holographicElement.style.backgroundPosition = percentage + "%";
}

function handleMouseMove(event) {
  const x = event.clientX;
  const width = document.documentElement.clientWidth;
  const value = x / width;
  updateHolographicBackground(value);
}

function handleDeviceOrientation(event) {
  const z = Math.abs(event.alpha); // rotation degrees from 0 to 360
  const value = z / 360;
  updateHolographicBackground(value);
}

window.addEventListener("deviceorientation", handleDeviceOrientation, true);