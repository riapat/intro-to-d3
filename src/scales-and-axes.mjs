// Data
const data = [30, 86, 168, 281, 303, 365];

// Set up the SVG
const width = 500;
const height = 200;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };

const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Scales
// .scaleBand() used to create a band scale for bar charts usually
// maps a discrete domain to continuous range, dividing range into bands
const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([0, width - margin.left - margin.right])
    .padding(0.1);

//maps a continuous input domain to a continuous output range
//.nice() rounds values
const y = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .nice()
    .range([height, 0]);

// Axes
//<g> is a group element to the x-axis
//translate() creates bottom-oriented axis based on x scale
//tickFormat() formats the tick labels 
svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(i => i + 1));

svg.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(y));

// Create the bar chart
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d))
    .attr("width", x.bandwidth())
    .attr("height", d => y(0) - y(d))
    .attr("fill", "steelblue");
