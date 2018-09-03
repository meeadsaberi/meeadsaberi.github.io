var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);



var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg3 = d3.select("#chr").attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("js/Plot_3.csv", function(error, data) {
  if (error) throw error;

  data.forEach(function(d) {
    d.stime = +d.stime;
    d.gtime = +d.gtime;
  });

  x.domain([0,160]).nice();
  y.domain([0,160]).nice();

  svg3.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width-100)
      .attr("y", 40)
      .style("text-anchor", "end")
      .text("Simulated Travel Time(Minutes)");

  svg3.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("x", -50)
      .attr("y", -30)
      .attr("dy", "-.71em")
      .style("text-anchor", "end")
      .text("Google Travel Time(Minutes)");
  svg3.append("g").append('line').attr({
        x1:1,
        y1:0,
        x2:width,
        y2:0,
        stroke: 'black',
        });
        
svg3.append("g").append('line').attr({
        x1:width,
        y1:0,
        x2:width,
        y2:height,
        stroke: 'black',
        });

  svg3.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", function(d) { return x(d.stime); })
      .attr("cy", function(d) { return y(d.gtime); })
      .style("fill","none");

  

});
