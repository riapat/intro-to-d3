// Data
const data = [
    { x: 30, y: 30 },
    { x: 86, y: 50 },
    { x: 168, y: 80 },
    { x: 281, y: 120 },
    { x: 303, y: 150 },
    { x: 365, y: 180 }
];

// Set up the SVG
const width = 500;
const height = 300;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const svg = d3.select("#scatterplot")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Scales
const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.x)])
    .range([0, width - margin.left - margin.right]);

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.y)])
    .range([height - margin.top - margin.bottom, 0]);

// Append circles
svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.x))
    .attr("cy", d => y(d.y))
    .attr("r", 5)
    .attr("fill", "steelblue");

// Axes
svg.append("g")
    .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
    .call(d3.axisBottom(x));

svg.append("g")
    .call(d3.axisLeft(y));
