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

        // append a cell to the row for each value 
        var cell = row.append('td').text(value);
    })
})

