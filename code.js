// Sample data set
var dataset = 
    [ 
    {
        "Category" : 0,
  "Dislikes" : 0.3,
  "Likes" : 0.2
    }, 
    {
        "Category" : 0,
    "Dislikes" : 0.2,
    "Likes" : 0.1
  }, 
  {
    "Category" : 1,
    "Dislikes" : 0.1,
    "Likes" : 0.1
  }, 
  {
    "Category" : 1,
    "Dislikes" : 0.1,
    "Likes" : 0.1
  }, 
  {
    "Category" : 1,
    "Dislikes" : 0.5,
    "Likes" : 0.2
  }, 
  {
    "Category" : 2,
    "Dislikes" : 0.5,
    "Likes" : 0.2
  }, 
  {
    "Category" : 2,
    "Dislikes" : 0.2,
    "Likes" : 0.1
  }, 
  {
    "Category" : 3,
    "Dislikes" : 0.3,
    "Likes" : 0.8
  }, 
  {
    "Category" : 3,
    "Dislikes" : 0.2,
    "Likes" : 0.4
  }, 
  {
    "Category" : 3,
    "Dislikes" : 0.1,
    "Likes" : 0.1
  }, 
  {
    "Category" : 3,
    "Dislikes" : 0.3,
    "Likes" : 0.2
  }, 
  {
    "Category" : 4,
    "Dislikes" : 0.4,
    "Likes" : 0.3
  }, 
  {
    "Category" : 4,
    "Dislikes" : 0.4,
    "Likes" : 0.2
  }, 
  {
    "Category" : 4,
    "Dislikes" : 0.1,
    "Likes" : 0.1
  }, 
  {
    "Category" : 4,
    "Dislikes" : 0.2,
    "Likes" : 0.1
  }, 
  {
    "Category" : 4,
    "Dislikes" : 0.1,
    "Likes" : 0.2
  }, 
  {
    "Category" : 4,
    "Dislikes" : 0.2,
    "Likes" : 0.7
  }, 
  {
    "Category" : 5,
    "Dislikes" : 0.1,
    "Likes" : 0.3
  }, 
  {
    "Category" : 5,
    "Dislikes" : 0.3,
    "Likes" : 0.7
  }, 
  {
    "Category" : 5,
    "Dislikes" : 0.6,
    "Likes" : 0.3
  }, 
  {
    "Category" : 5,
    "Dislikes" : 0.4,
    "Likes" : 0.7
  }, 
  {
    "Category" : 5,
    "Dislikes" : 0.1,
    "Likes" : 0.5
  }, 
  {
    "Category" : 6,
    "Dislikes" : 0.6,
    "Likes" : 0.7
  }, 
  {
    "Category" : 6,
    "Dislikes" : 0.2,
    "Likes" : 0.5
  }, 
  {
    "Category" : 6,
    "Dislikes" : 0.1,
    "Likes" : 0.7
  }, 
  {
    "Category" : 7,
    "Dislikes" : 0.1,
    "Likes" : 0.5
  }, 
  {
    "Category" : 7,
    "Dislikes" : 0.2,
    "Likes" : 0.7
  }, 
  {
    "Category" : 7,
    "Dislikes" : 0.2,
    "Likes" : 0.8
  }, 
  {
    "Category" : 7,
    "Dislikes" : 0.3,
    "Likes" : 0.2
  }, 
  {
    "Category" : 7,
    "Dislikes" : 0.4,
    "Likes" : 0.3
  }];


 var svgWidth = 360, svgHeight = 300, barPadding = 1.5;

var barWidth = (svgWidth / dataset.length); //an angle for an element


var svg = d3.select('svg')
  .attr('width',svgHeight*2)
  .attr('height',svgHeight*2);
 // .attr('transform','translate(100,0)');


var yScale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, svgHeight]);



var categoryArcs = svg.append('g').attr('class','catArcs');

var LikeBars = svg.append('g').attr('class','Likebar');
var DislikeBars = svg.append('g').attr('class','Dislikebar');

var drawarc = d3.arc()
    .innerRadius(0)
    .outerRadius(330)
    .startAngle(-(360/dataset.length)*(Math.PI/180)/2+Math.PI) 
    .endAngle((360/dataset.length)*(Math.PI/180)/2+Math.PI);

// green, blue, yellow, orange, red
var colors = [ '#2552A5','#8DC1FB','#EC4506','#F7A921','#3EA307','#79E336','#E18A06','#F1CD02','#1F8D84','#76BAA9','#E70605','#F8645A','#7D524A','#D99F94','#F22B64','#FF9EC3','#CF4E8E','#FE80C2','#B6532A','#FE9F7F'];


// Do not include a domain
var color = d3.scaleOrdinal(colors);

var outLimit = svg.append('g').attr('class','outLimiter'); 

var inspace = svg.append('g').attr('class','incircle');

var circles = outLimit.selectAll("circle").data(dataset).enter().append("circle");

var incircles = inspace.selectAll("circle").data(dataset).enter().append("circle");

var circleAttributes = circles.attr("cx", svgHeight/2+100)
.attr("cy", svgHeight/2+100)
.attr("r", (svgHeight*2)*0.3+1)
.style("fill", "none")
.style("stroke", "lightgray")
.style("stroke-width", 1);

var inndercircle = incircles.attr("cx", svgHeight/2+100)
.attr("cy", svgHeight/2+100)
.attr("r", (svgHeight*2)*0.05)
.style("fill", "none")
.style("stroke", "none")
.style("stroke-width", 1);

var catArc_n = categoryArcs.selectAll('path')
  .data(dataset)
  .enter()
  .append('path')
  .attr('d', drawarc)
  .style('fill', 
       function (d,i) { 
    return color(d.Category);
  })
  .style('opacity',0.4)
  .attr('transform', function(d,i){
    var translate = [barWidth * i, 0];
    var rot = barWidth * i;
    var height = svgHeight/2+100;
    return "translate("+height+","+height+")rotate("+rot+")scale(0.275)";
  });
    
var barChart_n = DislikeBars.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('y', function(d){
    return svgHeight - yScale(d.Dislikes)
  })
  .attr('height', function(d){
    return  yScale(d.Dislikes);
  })
  .attr('width', barWidth + barPadding)
  .attr('class','Dislikebar')
  .attr('transform', function(d,i){
    var translate = [barWidth * i, 0];
    var rot = barWidth * i;
    var height = svgHeight/2+100;
    return "translate("+height+","+height+")rotate("+rot+")scale(0.3)";
  });

var barChart_p = LikeBars.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('y', function(d){
    return svgHeight+5 // 5 for gap between pos and neg graph
  })
  .attr('height', function(d){
    return  yScale(d.Likes);
  })
  .attr('width', barWidth + barPadding)
  .attr('class','Likebar')
  .attr('transform', function(d,i){
    var translate = [barWidth * i, 0];
        var rot = barWidth * i;
    var height = svgHeight/2+100;
    return "translate("+height+","+height+")rotate("+rot+")scale(0.3)";
  });
