// Data
const data = [30, 86, 168, 281, 303, 365];

// Set up the SVG
const width = 500;
const height = 200;

const svg = d3.select("#bar-chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Create the bar chart
// .selectAll("rect") selects all rect elements
// .data(data) binds data to the selection
// .enter() creates placeholders for each data point
// .append("rect") creates a rect for each data point
// .attr() sets the x, y, width, and height attributes
// .attr("fill", "steelblue") changes the fill color to steelblue
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 70)
    .attr("y", d => height - d)
    .attr("width", 65)
    .attr("height", d => d)
    .attr("fill", "steelblue");
