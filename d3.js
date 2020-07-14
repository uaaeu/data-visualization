//Add Document Elements with D3
d3.select("body").append("h1").text("Learning D3");

//Select a Group of Elements with D3
d3.selectAll("li").text("list item");

//Work with Data in D3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text("New Title");

//Work with Dynamic Data in D3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => d + " USD");

//Add Inline Styling to Elements
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => d + " USD")
  .style("font-family", "verdana");

//Change Styles Based on Data
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => d + " USD")
  .style("color", (d) => (d < 20 ? "red" : "green"));

//Add Classes with D3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar");

//Update the Height of an Element Dynamically
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => d + "px");

//Change the Presentation of a Bar Chart
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => d * 10 + "px");

//Learn About SVG in D3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

//Display Shapes with SVG
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .append("rect")
  .attr("width", 25)
  .attr("height", 100)
  .attr("x", 0)
  .attr("y", 0);

//Create a Bar for Each Data Point in the Set
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);

//Dynamically Set the Coordinates for Each Bar
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    return i * 30;
  })
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);

//Dynamically Change the Height of Each Bar
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", (d, i) => {
    return d * 3;
  });

//Invert SVG Elements
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => {
    return h - 3 * d;
  })
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d);

//Change the Color of an SVG Element
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d)
  .attr("fill", "navy");

//Add Labels to D3 Elements
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d)
  .attr("fill", "navy");

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d - 3)
  .text((d) => d);

//Style D3 Labels
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => d * 3)
  .attr("fill", "navy");

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d - 3)
  .style("font-size", "25px")
  .style("fill", "red");

//Add a Hover Effect to a D3 Element
{
  /* 
<style>
.bar:hover {
    fill: brown;
}
</style>
*/
}
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d)
  .attr("fill", "navy")
  .attr("class", "bar");
svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d - 3);

//Add a Tooltip to a D3 Element
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => d * 3)
  .attr("fill", "navy")
  .attr("class", "bar")
  .append("title")
  .text((d) => d);

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - (d * 3 + 3));

//Create a Scatterplot with SVG Circles
const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
];

const w = 500;
const h = 500;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg.selectAll("circle").data(dataset).enter().append("circle");

//Add Attributes to the Circle Elements
const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
];

const w = 500;
const h = 500;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => d[0])
  .attr("cy", (d) => w - d[1])
  .attr("r", 5);

//Add Labels to Scatter Plot Circles
const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
];

const w = 500;
const h = 500;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => d[0])
  .attr("cy", (d, i) => h - d[1])
  .attr("r", 5);

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d[0] + ", " + d[1])
  .attr("x", (d, i) => d[0] + 5)
  .attr("y", (d, i) => h - d[1]);

//Create a Linear Scale with D3
const scale = d3.scaleLinear(); // Create the scale here
const output = scale(50); // Call the scale with an argument here
d3.select("body").append("h2").text(output);

//Set a Domain and a Range on a Scale
const scale = d3.scaleLinear();
scale.domain([250, 500]).range([10, 150]);

const output = scale(50);
d3.select("body").append("h2").text(output);

//Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
const positionData = [
  [1, 7, -4],
  [6, 3, 8],
  [2, 9, 3],
];

const output = d3.max(positionData, (d) => d[2]);

d3.select("body").append("h2").text(output);

//Use Dynamic Scales
const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
];

const w = 500;
const h = 500;

// Padding between the SVG canvas boundary and the plot
const padding = 30;

// Create an x and y scale

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([h - padding, padding]);

const output = yScale(411); // Returns 30
d3.select("body").append("h2").text(output);

//Use a Pre-Defined Scale to Place Elements
const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([h - padding, padding]);

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[0]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", 5);

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d[0] + ", " + d[1])
  .attr("x", (d) => xScale(d[0] + 10))
  .attr("y", (d) => yScale(d[1]));
