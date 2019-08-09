// from data.js
// var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// // Step 5: Use d3 to update each cell's text with
// // UFO sightings report values (datetime, city, state, country, shape, durationMinutes, comments)
  data.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
     // Append a cell to the row for each value
     // in the UFO sightings report object
      var cell = row.append("td");
     cell.text(value);
   });
 });

//________________________________________________

// Assign the data from `data.js` to a descriptive variable
var sightings = data;
// Select the submit button
var submit = d3.select("#filter-btn");
submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  // Grab the entire text box, not just the text inside,but the whole box.
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
//Filter needs a function.  It needs the =>    and === means the datatype is identical too.  What will come back in filtered data...the sightings that match the datetime. 
  var filteredSights = sightings.filter(sighting => sighting.datetime === inputValue);
  tbody.html("");
 filteredSights.forEach(function(ufoReport) {
	var row = tbody.append("tr");
	Object.entries(ufoReport).forEach(function([key, value]) {
     // Append a cell to the row for each value
     // in the UFO sightings report object
     var cell = row.append("td");
     cell.text(value);
   });
 });
  console.log(filteredSights);

});

//   $("#ufo-table tbody").clear();