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
      record.fields.Location.forEach((Location) => {
        // if the year is not already in the years array
        // add it to the years array
        if (!locations.includes(Location)) locations.push(Location);
      });
        // pull my airtable data 
        // create div element for each record
        let airtableItem = document.createElement("div");
        // add a class to the record element
        // add some data specific meta to my new divs for filtering
        airtableItem.classList.add("airtable-item");
        // set the data-year attribute equal to the value of the record year
        // this will be used to sort items
        airtableItem.setAttribute("data-Brand", record.fields.Brand);
        airtableItem.setAttribute("data-Source", record.fields.Source);
        airtableItem.setAttribute("data-Authenticity", record.fields.Authenticity);
        airtableItem.setAttribute("data-Location", record.fields.Location);
        airtableItem.setAttribute("data-Packager", record.fields.Packager);

        /*
        drawer title button
        */

        // create a button element hold the title, artist, and year
        let drawerButton = document.createElement("button");
        // add a class to the button element
        drawerButton.classList.add("drawer-button");
        // create an h2 element for the title
        let drawerButtonTitle = document.createElement("h2");
        // add a class to the button element
        drawerButtonTitle.classList.add("drawer-button--Name");
        // render the value of the record's title
        drawerButtonTitle.innerHTML = record.fields.Name;
        // append the button element to the airtableItem div element created above
        drawerButton.append(drawerButtonTitle);

        // create a button element hold the title, artist, and year
        let drawerButtonInfo = document.createElement("div");
        // add a class to the button element
        drawerButtonInfo.classList.add("drawer-button--info");
        // render the value of the record's title
        drawerButtonInfo.innerHTML = `${record.fields.Date[0]}, ${record.fields.Brand}, ${record.fields.Source}, ${record.fields.Authenticity}, ${record.fields.Location}, ${record.fields.Packager}`;
        // append the button element to the airtableItem div element created above
        drawerButton.append(drawerButtonInfo);
        // append the button element to the airtableItem div element created above
        airtableItem.append(drawerButton);
      
        // create a div element for the record's description, link, and image
        let drawerContent = document.createElement("div");
        // add a class to the img element
        drawerContent.classList.add("drawer-content");
        // if this is the first item in the for loop
        // add class to open it initially
        if (index == 0) {
          airtableItem.classList.add("is-open");
        }

        // create a div element for the record's description
        let drawerContentDescription = document.createElement("div");
        // add a class to the description element
        drawerContentDescription.classList.add("drawer-content--description");
        // render the record's desription in the html
        drawerContentDescription.innerHTML = record.fields.description;
        // append the div element to the airtableItem div element created above
        drawerContent.append(drawerContentDescription);

        // create a div element for the record's description
        let drawerContentImageTable = document.createElement("div");
        // add a class to the description element
        drawerContentImageTable.classList.add("drawer-content--imageTable");
        // append the div element to the airtableItem div element created above
        drawerContent.append(drawerContentImageTable);

        // create an img element for the record's image
        let drawerContentImage = document.createElement("img");
        // add a class to the image element
        drawerContentImage.classList.add("drawer-content--image");
        // set the source of the record's image
        drawerContentImage.src = record.fields.image[0].url;
        // append the img element to the image container element created above
        drawerContentImageTable.append(drawerContentImage);

        // append the drawer content element to the airtableItem div element created above
        airtableItem.append(drawerContent);        

        // once all elements are created for this record,
        // append it to the parent container
        container.append(airtableItem);

        // create drawer toggle function
        drawerButton.addEventListener("click", () => {
          airtableItem.classList.toggle("is-open");
        });        
        
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


