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
      airtableItem.setAttribute("data-Brand", record.fields.Brand);

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
let BackpackBoyzFilterBtn = document.getElementById("BackpackBoyz");
BackpackBoyzFilterBtn.addEventListener("click", function (event) {
  console.log("this is filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-mood contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");

  // search for data-mood, containg empowering
  listofAirtableItems.forEach(function searchBackpackBoyzFilter(item) {
    // if item.dataset.mood equal to "Empowering, then we trigger something
    if (item.dataset.brand == "BackpackBoyz") {
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
