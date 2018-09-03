var po = org.polymaps;
var color = pv.Scale.linear()
    .domain(0, 0.5, 0.7, 1.0,2.0)
    .range("#F00", "#930", "#FC0", "#3B0","#3B0");

var map = po.map()
    .container(document.getElementById("svgmap"))
    .center({lat:  -37.8142176, lon: 144.9631608})
    .zoom(13)
    .zoomRange([12, 16]);
map.add(po.image()
    .url(po.url("http://{s}.basemaps.cartocdn.com/dark_all/{Z}/{X}/{Y}.png")
    .hosts(["a.", "b.", "c.", ""])));
map.add(po.compass()
    .pan("none"));

map.add(po.geoJson()
    .url("js/d1.json")
    .id("streets")
    .zoom(12)
    .tile(false).on("load",load))
  ;

var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  var time =["06:15","06:30","06:45","07:00","07:15","07:30","07:45","08:00","08:15",
             "08:30","08:45","09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45",
             "11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","13:00","13:15",
             "13:30","13:45","14:00"];
  output.innerHTML = time[slider.value];



function load(e) {
  slider.stepUp = function() {
    output.innerHTML = time[slider.value];
    
    
  
  
  for (var i = 0; i < e.features.length; i++) {
    var f = e.features[i];
        
        
    //console.log(slider.value)   
    //var co=f.data.properties.congestion[slider.value];
    //var fo=color(co).color;
    

    f.element.setAttribute("stroke",color(f.data.properties.congestion[slider.value]).color);
    
    
  }
}

  slider.onchange = function() {
    output.innerHTML = time[slider.value];
    
  
  
  for (var i = 0; i < e.features.length; i++) {
    var f = e.features[i];
        
        
    //console.log(slider.value)   
    //var co=f.data.properties.congestion[slider.value];
    //var fo=color(co).color;
    

    f.element.setAttribute("stroke",color(f.data.properties.congestion[slider.value]).color);
    
    
  }
}
    
}