function makeLineChart(dataset, xName, yObjs, axisLables) {
    var chartObj = {};
    var color = d3.scale.category10();
    chartObj.xAxisLable = axisLables.xAxis;
    chartObj.yAxisLable = axisLables.yAxis;
    /*
     yObjsects format:
     {y1:{column:'',name:'name',color:'color'},y2}
     */

    chartObj.data = dataset;
    chartObj.margin = {top: 30, right: 8, bottom: 50, left: 100};
    chartObj.width = 546 - chartObj.margin.left - chartObj.margin.right;
    chartObj.height = 410 - chartObj.margin.top - chartObj.margin.bottom;

// So we can pass the x and y as strings when creating the function
    chartObj.xFunct = function(d){return d[xName]};

// For each yObjs argument, create a yFunction
    function getYFn(column) {
        return function (d) {
            return d[column];
        };
    }

// Object instead of array
    chartObj.yFuncts = [];
    for (var y  in yObjs) {
        yObjs[y].name = y;
        yObjs[y].yFunct = getYFn(yObjs[y].column); //Need this  list for the ymax function
        chartObj.yFuncts.push(yObjs[y].yFunct);
    }

//Formatter functions for the axes
    chartObj.formatAsNumber = d3.format(".0f");
    chartObj.formatAsDecimal = d3.format(".2f");
    chartObj.formatAsCurrency = d3.format("$.2f");
    chartObj.formatAsTime = d3.time.format("%H:%M");
    chartObj.formatAsFloat = function (d) {
        if (d % 1 !== 0) {
            return d3.format(".2f")(d);
        } else {
            return d3.format(".0f")(d);
        }
        
    };

    chartObj.xFormatter = chartObj.formatAsTime;
    chartObj.yFormatter = chartObj.formatAsFloat;

    chartObj.bisectYear = d3.bisector(chartObj.xFunct).left; //< Can be overridden in definition

//Create scale functions
    chartObj.xScale = d3.time.scale().range([0, chartObj.width]).domain(d3.extent(chartObj.data,  chartObj.xFunct)); //< Can be overridden in definition
   
// Get the max of every yFunct
    chartObj.max = function (fn) {
        return d3.max(chartObj.data, fn);
    };
    chartObj.yScale = d3.scale.linear().range([chartObj.height, 0]).domain([0, 350000]);

    chartObj.formatAsYear = d3.format("");

//Create axis
    chartObj.xAxis = d3.svg.axis().scale(chartObj.xScale).orient("bottom").ticks(7).tickFormat(chartObj.xFormatter); //< Can be overridden in definition

    chartObj.yAxis = d3.svg.axis().scale(chartObj.yScale).orient("left").tickFormat(chartObj.yFormatter); //< Can be overridden in definition


// Build line building functions
    function getYScaleFn(yObj) {
        return function (d) {
            return chartObj.yScale(yObjs[yObj].yFunct(d));
        };
    }
    for (var yObj in yObjs) {
        yObjs[yObj].line = d3.svg.line().x(function (d) {
            return chartObj.xScale(chartObj.xFunct(d));
        }).y(getYScaleFn(yObj));
    }
    

    chartObj.svg;

// Change chart size according to window size
    chartObj.update_svg_size = function () {
        chartObj.width = parseInt(chartObj.chartDiv.style("width"), 10) - (chartObj.margin.left + chartObj.margin.right);

        chartObj.height = parseInt(chartObj.chartDiv.style("height"), 10) - (chartObj.margin.top + chartObj.margin.bottom);

        /* Update the range of the scale with new width/height */
        chartObj.xScale.range([0, chartObj.width]);
        chartObj.yScale.range([chartObj.height, 0]);

        if (!chartObj.svg) {return false;}

        /* Else Update the axis with the new scale */
        chartObj.svg.select('.x.axis').attr("transform", "translate(0," + chartObj.height + ")").call(chartObj.xAxis);
        chartObj.svg.select('.x.axis .label').attr("x", chartObj.width / 2);

        chartObj.svg.select('.y.axis').call(chartObj.yAxis);
        chartObj.svg.select('.y.axis .label').attr("x", -chartObj.height / 2);
        chartObj.svg.select("g").attr("class", "x axis").attr("transform", "translate(0," + chartObj.height + ")").call(chartObj.xAxis).selectAll("text").
            style("text-anchor", "end")
            .attr("dx", "-0.8em")
            .attr("dy", "-0.2em")
            .attr("transform", "rotate(-90)" );
        

        /* Force D3 to recalculate and update the line */
        for (var y  in yObjs) {
            yObjs[y].path.attr("d", yObjs[y].line);
        }
        

        d3.selectAll(".focus.line").attr("y2", chartObj.height);

        chartObj.chartDiv.select('svg').attr("width", chartObj.width + (chartObj.margin.left + chartObj.margin.right)).attr("height", chartObj.height + (chartObj.margin.top + chartObj.margin.bottom));

        chartObj.svg.select(".overlay").attr("width", chartObj.width).attr("height", chartObj.height);
        return chartObj;
    };

    chartObj.bind = function (selector) {
        chartObj.mainDiv = d3.select(selector);
        // Add all the divs to make it centered and responsive
        chartObj.mainDiv.append("div").attr("class", "inner-wrapper").append("div").attr("class", "outer-box").append("div").attr("class", "inner-box");
        chartSelector = selector + " .inner-box";
        chartObj.chartDiv = d3.select(chartSelector);
        d3.select(window).on('resize.' + chartSelector, chartObj.update_svg_size);
        chartObj.update_svg_size();
        return chartObj;
    };

// Render the chart
    chartObj.render = function () {
        //Create SVG element
        chartObj.svg = chartObj.chartDiv.append("svg").attr("class", "chart-area").attr("width", chartObj.width + (chartObj.margin.left + chartObj.margin.right )).attr("height", chartObj.height + (chartObj.margin.top + chartObj.margin.bottom + 100)).append("g").attr("transform", "translate(" + chartObj.margin.left + "," + chartObj.margin.top + ")");

        // Draw Lines
        for (var y  in yObjs) {
            yObjs[y].path = chartObj.svg.append("path").datum(chartObj.data).attr("class", "line").attr("d", yObjs[y].line).style("stroke", color(y)).attr("data-series", y).on("mouseover", function () {
                focus.style("display", null);
            }).on("mouseout", function () {
                focus.transition().delay(700).style("display", "none");
            }).on("mousemove", mousemove);
        }
        

        // Draw Axis
        chartObj.svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + chartObj.height + ")").call(chartObj.xAxis).selectAll("text").
            style("text-anchor", "end")
            .attr("dx", "-0.8em")
            .attr("dy", "-0.2em")
            .attr("transform", "rotate(-90)" );
        chartObj.svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + chartObj.height + ")").append("text").attr("class", "label").attr("x", chartObj.width / 2).attr("y", 65).style("text-anchor", "middle").text(chartObj.xAxisLable);

        chartObj.svg.append("g").attr("class", "y axis").call(chartObj.yAxis).append("text").attr("class", "label").attr("transform", "rotate(-90)").attr("y", -75).attr("x", -chartObj.height / 2).attr("dy", ".71em").style("text-anchor", "middle").text(chartObj.yAxisLable);
        chartObj.svg.append("g").append('line').attr({
        x1:0,
        y1:-3,
        x2:chartObj.width,
        y2:-3,
        stroke: 'black',
        });
        
chartObj.svg.append("g").append('line').attr({
        x1:chartObj.width,
        y1:-3,
        x2:chartObj.width,
        y2:chartObj.height,
        stroke: 'black',
        });

        //Draw tooltips
        var focus = chartObj.svg.append("g").attr("class", "focus").style("display", "none");
        chartObj.svg.selectAll("dot")
        .data(chartObj.data)
      .enter().append("circle")
        .attr("r", 3.5)
        .attr("cx",function(d) { return chartObj.xScale(d[xName]) })
        .attr("cy", function(d) { return chartObj.yScale(yObjs[y].yFunct(d)) });
        
        chartObj.svg.selectAll("dot")
        .data(chartObj.data)
      .enter().append("circle")
        .attr("r", 3.5)
        .attr("cx",function(d) { return chartObj.xScale(d[xName]) })
        .attr("cy", function(d) { return chartObj.yScale(yObjs["Population"].yFunct(d)) });

        for (var y  in yObjs) {
            yObjs[y].tooltip = focus.append("g");
            yObjs[y].tooltip.append("circle").attr("r", 5);
            yObjs[y].tooltip.append("rect").attr("x", 8).attr("y","-5").attr("width",22).attr("height",'0.75em');
            yObjs[y].tooltip.append("text").attr("x", 9).attr("y", 10);
        }

        // Year label
        focus.append("text").attr("class", "focus year").attr("x", 9).attr("y", 7);
        focus.append("text").attr("class", "labeldetails").attr("x", 28).attr("y", 7);
        focus.append("text").attr("class", "labeldetails1").attr("x", 38).attr("y", 7);
        // Focus line
        focus.append("line").attr("class", "focus line").attr("y1", 0).attr("y2", chartObj.height);

        //Draw legend
        var legend = chartObj.mainDiv.append('div').attr("class", "legend");
        for (var y  in yObjs) {
            series = legend.append('div');
            series.append('div').attr("class", "series-marker").style("background-color", color(y));
            series.append('p').text(y);
            yObjs[y].legend = series;
        }

        // Overlay to capture hover
        chartObj.svg.append("rect").attr("class", "overlay").attr("width", chartObj.width).attr("height", chartObj.height).on("mouseover", function () {
            focus.style("display", null);
        }).on("mouseout", function () {
            focus.style("display", "none");
        }).on("mousemove", mousemove);

        return chartObj;
        function mousemove() {
            var x0 = chartObj.xScale.invert(d3.mouse(this)[0]), i = chartObj.bisectYear(dataset, x0, 1), d0 = chartObj.data[i - 1], d1 = chartObj.data[i];
            try {
                var d = x0 - chartObj.xFunct(d0) > chartObj.xFunct(d1) - x0 ? d1 : d0;
            } catch (e) { return;}
            minY = chartObj.height;
            for (var y  in yObjs) {
                yObjs[y].tooltip.attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + "," + chartObj.yScale(yObjs[y].yFunct(d)) + ")");
                //yObjs["Population"].tooltip.select("text").text(chartObj.yFormatter(yObjs["Population"].yFunct(d))+"Target"+chartObj.yFormatter(yObjs["Target Group"].yFunct(d)));
                //yObjs["Population"].tooltip.append("text").text(chartObj.yFormatter(yObjs["Target Group"].yFunct(d))+"\n"+chartObj.yFormatter(yObjs["Target Group"].yFunct(d)));
                //yObjs[y].tooltip.select("text").text(chartObj.yFormatter(yObjs[y].yFunct(d)));
                minY = Math.min(minY, chartObj.yScale(yObjs[y].yFunct(d)));
            }

            focus.select(".focus.line").attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + ")").attr("y1", minY);
            focus.select(".focus.year").text("Time: " + chartObj.xFormatter(chartObj.xFunct(d))).attr("y","25").attr("x","20");
            focus.select(".labeldetails").text("Population: " + chartObj.yFormatter(yObjs["Population"].yFunct(d))).attr("y","25").attr("x","280");
            focus.select(".labeldetails1").text("Target Group: " + chartObj.yFormatter(yObjs["Target Group"].yFunct(d))).attr("y","50").attr("x","280");
        }

    };
    return chartObj;
}