// Show that we've loaded the JavaScript file
console.log("Loaded chargernetwork.js");

// Query the endpoint that returns a JSON ...
d3.json("/networks").then(function (data) {
    // console.log(data);
    // ... and dump that JSON to the console for inspection

    // Next, pull out the keys and the values for graphing
    keys = Object.keys(data);
    values = Object.values(data);
     

    // Create the trace
    var trace = {
        // x: keys,
        // y: values,
        type: "table",
            header: { 
                values: [["<b>Connector Type<b>"], ["<b>Number of Connectors<b>"]],
                align: ["left", "center"],
                fill: {color: '#119DFF'},
                },
            cells: {
                values: [keys, values],
                align: ["left", "center"],
                line: {color: "#506784", width: 1},
                fill: {color: ['#25FEFD', 'white']},
                }
    };

    // console.log(trace);

    // Put the trace into an array (which allows us to graph
    // multiple traces, if we wish)
    var data = [trace];

    // Define a layout object
    var layout = {
        title: "Types of Connectors",
    };

    // Create the plot
    Plotly.newPlot('plot', data, layout); 
});