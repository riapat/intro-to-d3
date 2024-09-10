// Set up the SVG
const width = 600;
const height = 400;

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
const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.x)])
    .range([0, width]);

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.y)])
    .range([height, 0]);

// Create scatterplot
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
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

svg.append("g")
    .call(d3.axisLeft(y));
