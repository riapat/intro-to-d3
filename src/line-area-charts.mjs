// Data
const data = [
    { date: new Date(2024, 0, 1), value: 30 },
    { date: new Date(2024, 1, 1), value: 86 },
    { date: new Date(2024, 2, 1), value: 168 },
    { date: new Date(2024, 3, 1), value: 281 },
    { date: new Date(2024, 4, 1), value: 303 },
    { date: new Date(2024, 5, 1), value: 365 },
];

// Set up the SVG for the line and area charts
const width = 500;
const height = 200;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };

// Append the SVG
// .attr("transform", `translate(${margin.left},${margin.top})`) moves the chart to the right and down
const svg = d3.select("#line-chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Scales
// .scaleTime() creates a time scale for continuous input domains
// .domain() sets the input domain
// .range() sets the output range
const x = d3.scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([0, width - margin.left - margin.right]);

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .nice()
    .range([height, 0]);

// Generates line path
// .x() sets the x-coordinate
// .y() sets the y-coordinate
const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.value));

// Generates area under a line
// .x() sets the x-coordinate
// .y0() sets the y-coordinate for the bottom of the area
// .y1() sets the y-coordinate for the top of the area
const area = d3.area()
    .x(d => x(d.date))
    .y0(height)
    .y1(d => y(d.value));

// Append the area
//.datum binds provides entire data array to path elements for the area and line charts, binding a single data object to a single element
svg.append("path")
    .datum(data)
    .attr("fill", "lightsteelblue")
    .attr("d", area);

// Append the line
svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("d", line);

// Axes
// .attr("transform", `translate(0,${height})`) is used to move the x-axis to the bottom of the chart
svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

svg.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(y));
