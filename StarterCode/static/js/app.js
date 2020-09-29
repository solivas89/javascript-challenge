// from data.js
var tableData = data;

// select the table & tbody from indexed.html
var ufoTable = d3.select('table');

var tbody = d3.select('tbody');

// Day 2 - Act. #7 & #8 / Day 3 Act. #3
// iterating throgh each row of each json object in data
tableData.forEach((ufo) => {
    // console.log(ufo);

    // append one table row for each sighting in data
    var row = tbody.append('tr');

    // console log each sighting value
    Object.entries(ufo).forEach(([key,value]) =>{
        // console.log(key,value);

        // append a cell to the row for each value in the json objects
        var cell = row.append('td').text(value);
    })
})

// select the filter button
var ufoButton = d3.select('button');
ufoButton.text('Sightings Filter')
console.log(ufoButton)

// Day 3 - Act. #3, #5 & #9
// function w/ the event handler 
function runEnter() {
    
    // removing existing table rows
    tbody.html('');

    // prevent the page from refreshin
    d3.event.preventDefault();

    // get the value for the input element
    var inputElement = d3.select('#datetime').property('value');
    // console.log(inputElement);

    // filter throuhg the reports
    var filteredData = tableData.filter( date => date.datetime === inputElement);
    console.log(filteredData)


    // display the data
    filteredData.forEach((ufo) => {
        var row = tbody.append('tr');

         // append a cell to the row for each value 
        Object.entries(ufo).forEach(([key,value]) => {
            console.log(key,value);

             // append a cell to the row for each value 
            var cell = row.append('td').text(value);
        });
    });
}

// event handler/ function
ufoButton.on('click', runEnter);