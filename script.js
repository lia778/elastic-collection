// activate airtable object
var Airtable = require("airtable");

var base = new Airtable(
  {apiKey:"keyCteapyZ1OyWKMD"}
).base("appgp5WUx7Qk5bSfm");

base("Table 1").select({
    maxRecords: 50,
    // view: "Grid view",
}).eachPage(
  function page(records, fetchNextPage){
    console.log("records:", records); 
    records.forEach(
      function (record) {
        // pull my airtable data 
        // each record will have its own div
        let airtableItem = document.createElement("div");
        // add some data specific meta to my new divs for filtering
        airtableItem.classList.add("airtable-item");
        airtableItem.setAttribute("data-Brand", record.fields.Brand);
        
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
// listen for user clicker, once it is clicker, serach for divs with data-Brand, empowering 

// get our button using css ID 
// assign a event listener to my button to listen for click
let empoweringFilterBtn = document.getElementById("Empowering");
empoweringFilterBtn.addEventListener("click", function(event){
  console.log("this is filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-Brand contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-Brand
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  
  // search for data-Brand, containg empowering 
  listofAirtableItems.forEach(
    function searchEmpoweringFilter(item){
      // if item.dataset.Brand equal to "Empowering, then we trigger something 
      if (item.dataset.Brand == "Empowering") {
        // if the div has data-Brand empowering, add red background by adding css class
        item.classList.add("empowering-filter-show");
        console.log(item);
      }
      else {
        item.classList.add("empowering-filter-hide");
      }
      
      
    }
  )
  
});


