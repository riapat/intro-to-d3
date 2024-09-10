// Set up the SVG
const width = 600;
const height = 400;

// .append("svg") creates an SVG element in the sandbox div
// .attr() sets the width and height of the SVG
const svg = d3.select("#sandbox")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Sample data
const data = [
    { x: 30, y: 30 },
    { x: 86, y: 50 },
    { x: 168, y: 80 },
    { x: 281, y: 120 },
    { x: 303, y: 150 },
    { x: 365, y: 180 }
];

// Scales
// .scaleLinear() creates a linear scale for continuous input domains
// .domain() sets the input domain
// .range() sets the output range
const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.x)])
    .range([0, width]);

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.y)])
    .range([height, 0]);

// Create scatterplot
// .selectAll("circle") selects all circle elements
// .data(data) binds data to the selection
// .enter() creates placeholders for each data point
// .append("circle") creates a circle for each data point
// .attr() sets the x, y, and radius attributes
// .on() adds event listeners for mouseover and mouseout
// .select(this) selects the current element
// .attr("fill", "orange") changes the fill color to orange
// .append("text") creates a text element for the tooltip
// .attr("id", "tooltip") sets the id attribute to tooltip
// .text() sets the text content of the tooltip
// .remove() removes the tooltip when the mouse leaves the circle
svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.x))
    .attr("cy", d => y(d.y))
    .attr("r", 5)
    .attr("fill", "steelblue")
    .on("mouseover", function(event, d) {
        d3.select(this).attr("fill", "orange");
        svg.append("text")
            .attr("x", x(d.x))
            .attr("y", y(d.y) - 10)
            .attr("text-anchor", "middle")
            .attr("id", "tooltip")
            .text(`(${d.x}, ${d.y})`);
    })
    .on("mouseout", function() {
        d3.select(this).attr("fill", "steelblue");
        d3.select("#tooltip").remove();
    });

// Axes
// .append("g") creates a group element for the x-axis
// .attr("transform") translates the x-axis to the bottom of the chart
// .call() calls the axis function to generate the axis
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

svg.append("g")
    .call(d3.axisLeft(y));
