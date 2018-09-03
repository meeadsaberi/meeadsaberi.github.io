// Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 50, left: 100},
    width = 546 - margin.left - margin.right,
    height = 410 - margin.top - margin.bottom;

// Parse the date / tim46var parseDate = d3.time.format("%d-%b-%y").parse;
var formatTime = d3.time.format("%e %B");

// Set the ranges
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(5);

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(5);



// Define the line
var valueline = d3.svg.line()
    .x(function(d) { return x(d.xdata); })
    .y(function(d) { return y(d.ydata); });

// Define the div for the tooltip
// Define the div for the tooltip
var div = d3.select("#chart1").append("div")   
    .attr("class", "tooltip1")               
    .style("opacity", 0);

// Adds the svg canvas
var svg1 = d3.select("#chart1")
    .append("svg").attr("class","c1")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");


// Get the data
d3.csv("js/Plot_1.csv", function(error, data) {
    data.forEach(function(d) {
        d.ydata = +d.ydata;
        d.xdata = +d.xdata;
    });

    // Scale the range of the data
    x.domain([0,300000]);
    y.domain([0, 80000]);

    // Add the valueline path.
    svg1.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

    // Add the scatterplot
    svg1.selectAll("dot")    
        .data(data)         
    .enter().append("circle")                               
        .attr("r", 5)       
        .attr("cx", function(d) { return x(d.xdata); })       
        .attr("cy", function(d) { return y(d.ydata); })     
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Time:"+"<br>"+d.time)  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 28) + "px");    
            })

        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);   
        });

    

    // Add the X Axis
    svg1.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append('line')
  // add extension arrow
  .attr({
        x1:width,
        y1:0,
        x2:width+15,
        y2:0,
        stroke: '#000000',
        });


    // Add the Y Axis
    svg1.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append('line')
  // add extension arrow
  .attr({
        x1:0,
        y1:0,
        x2:0,
        y2:-15,
        stroke: '#000000',
        });

    svg1.append("g").append('line').attr({
        x1:0,
        y1:-15,
        x2:width+15,
        y2:-15,
        stroke: '#000000',
        });
        
svg1.append("g").append('line').attr({
        x1:width+15,
        y1:-15,
        x2:width+15,
        y2:height,
        stroke: '#000000',
        });


    svg1.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").append("text").attr("class", "label").attr("x", width / 2).attr("y", 50).style("text-anchor", "middle").text("N(t) Number of Vehicles in the Network");

    svg1.append("g").attr("class", "y axis").call(yAxis).append("text").attr("class", "label").attr("transform", "rotate(-90)").attr("y", -72).attr("x", -height / 2).attr("dy", ".50em").style("text-anchor", "middle").text("G(N(t)) Number of Vehicles Completing their Trip");

    


});

