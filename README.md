# GRAVITY
A gravity simulator written in HTML. Just an old, unfinished, abandoned project.
# Disclaimer
its very bad and i dont know how it works  
EDIT: just noticed that even the UI doesnt work, might fix it later, probably not gonna tho
# Creating planets
Open up the console and use the function `createPlanet(name, mass, size, color, position, velocity)` to create new planets.  
To remove them, just delete the HTML `planet` element.  
Some solar system presets are in the `main.js` file, so you can play around with those.
```
// Spiral
createPlanet('Planet', 6e24, 100000, { r: 255, g: 255, b: 255 }, { x: 0, y: 1000000 }, { x: 10000000, y: 0 });
createPlanet('Sun', 2e30, 500000, { r: 200, g: 50, b: 50 }, { x: 0, y: 0 }, { x: 0, y: 0 });

// Doubley doo
createPlanet('Planet 1', 6e24, 100000, { r: 255, g: 255, b: 255 }, { x: 0, y: 1000000 }, { x: 5000000, y: 0 });
createPlanet('Planet 2', 6e24, 100000, { r: 255, g: 255, b: 255 }, { x: 0, y: -1000000 }, { x: -5000000, y: 0 });
createPlanet('Sun', 2e30, 500000, { r: 200, g: 50, b: 50 }, { x: 0, y: 0 }, { x: 0, y: 0 });

// Randomness
createPlanet('Sun', 1e30, 4e5, { r: 255, g: 255, b: 255 }, { x: 0, y: 0 }, { x: 0, y: 0 });
createPlanet('Planet 1', 1e20, 15e4, { r: 50, g: 50, b: 50 }, { x: 0, y: -2000000 }, { x: 5000000, y: 0 });
createPlanet('Planet 2', 3e20, 15e4, { r: 50, g: 50, b: 50 }, { x: 2500000, y: 0 }, { x: 0, y: 5000000 });
createPlanet('Planet 3', 4e20, 15e4, { r: 50, g: 50, b: 50 }, { x: 0, y: 3000000 }, { x: -3500000, y: 0 });

// Solar system
createPlanet('Sun', 2e30, 14000000000, { r: 255, g: 128, b: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 });
createPlanet('Mercury', 3.2e23, 4800000000, { r: 100, g: 100, b: 100 }, { x: 0, y: -64e9 }, { x: 48000, y: 0 });
createPlanet('Venus', 4.8e24, 12000000000, { r: 180, g: 180, b: 180 }, { x: 108e9, y: 0 }, { x: 0, y: 35000 });
createPlanet('Earth', 6e24, 12000000000, { r: 0, g: 100, b: 180 }, { x: 0, y: 150e9 }, { x: -30000, y: 0 });
createPlanet('Mars', 6.4e23, 6600000000, { r: 150, g: 100, b: 0 }, { x: -230e9, y: 0 }, { x: 0, y: -24000 });
zoom = 0.00002;
```
# Variables
There are some variables available through the UI, even tho I wouldn't rely much on that.  
The variables can be modified through the console.
```
var clipToCenter = false;     // Whether to center the scene around the center of all of it's objects
var pause = false;            // Stop the time
var zoom = 1;                 // Zoooooom
var timescale = 1;            // Guess what this could do
```
