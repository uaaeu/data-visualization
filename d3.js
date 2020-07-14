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
