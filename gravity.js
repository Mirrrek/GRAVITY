// Units
// Mass: kg
// Distance/Size: m
// Time: s

// Variables
var clipToCenter = false;
var pause = false;
var zoom = 1;
var timescale = 1;

// Declare Planets
var planets = [];

// Update every 16ms
setInterval(() => {
    if (pause) { return; }
    // Iterate over each planet
    planets.forEach((planet1) => {
        // Iterate over each other planet
        planets.forEach((planet2) => {
            if (planet1 == planet2) { return; }
            // Calculate the force
            const force = 6.67408e-11 * ((planet1.mass * planet2.mass) / (Math.pow(planet2.position.x - planet1.position.x, 2) + Math.pow(planet2.position.y - planet1.position.y, 2)));
            // Calculate the force angle
            const angle = Math.atan2(planet2.position.y - planet1.position.y, planet2.position.x - planet1.position.x);
            // Add the decomposed force to the array
            planet1.forces.push({ x: force * Math.cos(angle), y: force * Math.sin(angle) });
        });
        // Declare the total forces
        var xForceTotal = 0;
        var yForceTotal = 0;
        planet1.forces.forEach((force) => {
            // For each force in the array, increment the total forces
            xForceTotal += force.x;
            yForceTotal += force.y;
        });
        // Devide the total forces by the number of forces
        const xForce = xForceTotal / planet1.forces.length;
        const yForce = yForceTotal / planet1.forces.length;
        // Clear the array
        planet1.forces = [];
        // Calculate the displacement
        const xDisplacement = (planet1.velocity.x * (timescale * 0.016)) + (0.5 * (xForce / planet1.mass) * Math.pow(timescale * 0.016, 2));
        const yDisplacement = (planet1.velocity.y * (timescale * 0.016)) + (0.5 * (yForce / planet1.mass) * Math.pow(timescale * 0.016, 2));
        // Update the position
        planet1.position.x += xDisplacement;
        planet1.position.y += yDisplacement;
        // Update the velocity
        planet1.velocity.x = xDisplacement / (timescale * 0.016);
        planet1.velocity.y = yDisplacement / (timescale * 0.016);
        // Update the UI
        planet1.element.style.left = (Math.round(planet1.position.x / (10000 / zoom)) + window.innerWidth / 2) + 'px';
        planet1.element.style.top = (Math.round(planet1.position.y / (10000 / zoom)) + window.innerHeight / 2) + 'px';
        planet1.element.style.width = Math.round(planet1.size / (10000 / zoom)) + 'px';
        planet1.element.style.height = Math.round(planet1.size / (10000 / zoom)) + 'px';
    });
    if (clipToCenter) {
        planets.forEach((planet) => {
            const offset = getCentroid(planets.map(i => [i.position.x, i.position.y]));
            planet.element.style.left = (Math.round((planet.position.x - offset[0]) / (10000 / zoom)) + window.innerWidth / 2) + 'px';
            planet.element.style.top = (Math.round((planet.position.y - offset[1]) / (10000 / zoom)) + window.innerHeight / 2) + 'px';
        });
    }
}, 16);

function createPlanet(name, mass, size, color, position, velocity) {
    // Create UI elements
    const element = document.createElement('planet');
    const label = document.createElement('p');
    const screen = document.getElementById('screen');
    element.style.background = 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
    label.innerText = name;
    element.appendChild(label);
    screen.appendChild(element);
    // Push values
    planets.push({
        mass: mass,
        size: size,
        position: { x: position.x, y: position.y },
        velocity: { x: velocity.x/*DIRTY FUCKING TRICK GET THIS SHIT OUT ASAP*/ / 3, y: velocity.y/*SAME FUCKING SHIT HERE*/ / 3 },
        forces: [],
        element: element
    });
}

function getCentroid(vertices) {
    const x = vertices.map(i => i[0]);
    const y = vertices.map(i => i[1]);
    return [(Math.min.apply(null, x) + Math.max.apply(null, x)) / 2, (Math.min.apply(null, y) + Math.max.apply(null, y)) / 2];
}

function getSize(vertices) {
    const x = vertices.map(i => i[0]);
    const y = vertices.map(i => i[1]);
    const width = Math.round(Math.max.apply(null, x) - Math.min.apply(null, x));
    const height = Math.round(Math.max.apply(null, y) - Math.min.apply(null, y));
    return Math.max.apply(null, [width, height]);
}