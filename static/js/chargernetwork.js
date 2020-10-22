// Show that we've loaded the JavaScript file
console.log("Loaded chargernetwork.js");

// Query the endpoint that returns a JSON ...
d3.json("/evnetwork").then(function (data) {

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
        title: "Number of Chargers in Each Charger Network",
    };

    // Create the plot
    Plotly.newPlot('plot', data, layout); 
});