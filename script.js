var Airtable = require("airtable");
var base = new Airtable(
  {apiKey:"keyCteapyZ1OyWKMD"}
).base("appgp5WUx7Qk5bSfm");

// create empty array to use later for filters
let locations = [];

// find the parent container element to which we will append each record
let container = document.querySelector(".content-container");

base("Table 1").select({
    maxRecords: 50,
    view: "Grid view",
})
.eachPage(
  function page(records, fetchNextPage){
    // This function (`page`) will get called for each page of records.
    records.forEach(function (record, index) {
      // loop through each year in this record
      record.fields.location.forEach((location) => {
        // if the year is not already in the years array
        // add it to the years array
        if (!locations.includes(location)) locations.push(location);
      });
        // pull my airtable data 
        // create div element for each record
        let airtableItem = document.createElement("div");
        // add a class to the record element
        // add some data specific meta to my new divs for filtering
        airtableItem.classList.add("airtable-item");
        // set the data-year attribute equal to the value of the record year
        // this will be used to sort items
        airtableItem.setAttribute("data-brand", record.fields.brand);
        
        // create a img tag for my album art 
        let image = document.createElement("img");
        image.src = record.fields.image[0].url;
        // create a span for my artist name 
        let Name = document.createElement("span");
        Name.innerHTML = record.fields.Name;
        
        // appending to div holding each airtable record 
        airtableItem.append(image);
        airtableItem.append(Name);
       // append div to body 
        document.body.append(airtableItem);
      }
    
      
    )
  }
); 

// set up a event listener for my empowering button 
// listen for user clicker, once it is clicked, serach for divs with data-Brand, empowering 

// get our button using css ID 
// assign a event listener to my button to listen for click
let empoweringFilterBtn = document.getElementById("Backpack Boyz");
empoweringFilterBtn.addEventListener("click", function(event){
  console.log("this is filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-Brand contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-Brand
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  
  // search for data-Brand, containg empowering 
  listofAirtableItems.forEach(
    function searchBackpackBoyzFilter(item){
      // if item.dataset.Brand equal to "Empowering, then we trigger something 
      if (item.dataset.Brand == "Backpack Boyz") {
        // if the div has data-Brand empowering, add red background by adding css class
        item.classList.add("Backpack Boyz-filter-show");
        console.log(item);
      }
      else {
        item.classList.add("Backpack Boyz-filter-hide");
      }
      
      
    }
  )
  
});


