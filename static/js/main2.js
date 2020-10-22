// Show that we've loaded the JavaScript file
console.log("Loaded main2.js");

// Query the endpoint that returns a JSON ...
d3.json("/chargersperstate").then(function (data) {

    // ... and dump that JSON to the console for inspection
    console.log(data); 

    // Next, pull out the keys and the values for graphing
    keys = Object.keys(data);
    values = Object.values(data);

    // Create the trace
    var trace = {
        x: keys,
        y: values,
        type: "bar"
    };
    console.log(trace);

    // Put the trace into an array (which allows us to graph
    // multiple traces, if we wish)
    var data = [trace];

    // Define a layout object
    var layout = {
        title: "EV Chargers in Each State",
        xaxis: { title: "States"},
        yaxis: { title: "Number of Chargers"}
    };

    // Create the plot
    Plotly.newPlot('plot', data, layout); 
});