{
    // // Spiral
    // createPlanet('Planet', 6e24, 100000, { r: 255, g: 255, b: 255 }, { x: 0, y: 1000000 }, { x: 10000000, y: 0 });
    // createPlanet('Sun', 2e30, 500000, { r: 200, g: 50, b: 50 }, { x: 0, y: 0 }, { x: 0, y: 0 });

    // Doubley doo
    // createPlanet('Planet 1', 6e24, 100000, { r: 255, g: 255, b: 255 }, { x: 0, y: 1000000 }, { x: 5000000, y: 0 });
    // createPlanet('Planet 2', 6e24, 100000, { r: 255, g: 255, b: 255 }, { x: 0, y: -1000000 }, { x: -5000000, y: 0 });
    // createPlanet('Sun', 2e30, 500000, { r: 200, g: 50, b: 50 }, { x: 0, y: 0 }, { x: 0, y: 0 });

    // Randomness
    createPlanet('Sun', 1e30, 4e5, { r: 255, g: 255, b: 255 }, { x: 0, y: 0 }, { x: 0, y: 0 });
    createPlanet('Planet 1', 1e20, 15e4, { r: 50, g: 50, b: 50 }, { x: 0, y: -2000000 }, { x: 5000000, y: 0 });
    createPlanet('Planet 2', 3e20, 15e4, { r: 50, g: 50, b: 50 }, { x: 2500000, y: 0 }, { x: 0, y: 5000000 });
    createPlanet('Planet 3', 4e20, 15e4, { r: 50, g: 50, b: 50 }, { x: 0, y: 3000000 }, { x: -3500000, y: 0 });

    // Solar system
    // createPlanet('Sun', 2e30, 14000000000, { r: 255, g: 128, b: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 });
    // createPlanet('Mercury', 3.2e23, 4800000000, { r: 100, g: 100, b: 100 }, { x: 0, y: -64e9 }, { x: 48000, y: 0 });
    // createPlanet('Venus', 4.8e24, 12000000000, { r: 180, g: 180, b: 180 }, { x: 108e9, y: 0 }, { x: 0, y: 35000 });
    // createPlanet('Earth', 6e24, 12000000000, { r: 0, g: 100, b: 180 }, { x: 0, y: 150e9 }, { x: -30000, y: 0 });
    // createPlanet('Mars', 6.4e23, 6600000000, { r: 150, g: 100, b: 0 }, { x: -230e9, y: 0 }, { x: 0, y: -24000 });
    // zoom = 0.00002;

    const pauseButton = document.getElementById('pauseButton');

    pauseButton.onclick = () => {
        pause = !pause;
    }

    const centerButton = document.getElementById('centerButton');

    centerButton.onclick = () => {
        clipToCenter = !clipToCenter;
    }

    const zoomSlider = document.getElementById('zoomSlider');
    const zoomSliderCheck = document.getElementById('zoomSliderCheck');

    zoomSlider.oninput = () => {
        zoom = zoomSlider.value / 50;
        zoomSliderCheck.innerText = decimalString(zoom);
    }

    const timescaleSlider = document.getElementById('timescaleSlider');
    const timescaleSliderCheck = document.getElementById('timescaleSliderCheck');

    timescaleSlider.oninput = () => {
        timescale = timescaleSlider.value / 10;
        timescaleSliderCheck.innerText = decimalString(timescale);
    }

    const planetCreator = document.getElementById('planetCreator');

    planetCreator.oninput = () => {
        var name = document.getElementById('planetName').value;
        var mass = document.getElementById('planetMass').value;
        var size = document.getElementById('planetSize').value;
        var color = document.getElementById('planetColor').value;
        var posX = document.getElementById('planetPosX').value;
        var posY = document.getElementById('planetPosY').value;
        var velX = document.getElementById('planetVelX').value;
        var velY = document.getElementById('planetVelY').value;

        name = name.substring(0, 32);
        if (!name) {
            name = 'Planet';
        }

        if (mass.endsWith(' kg')) {
            mass = mass.slice(0, -3);
        }
        mass = Number(mass);
        if (!mass) {
            mass = 0;
        }

        if (size.endsWith(' km')) {
            size = size.slice(0, -3);
        }
        size = Number(size);
        if (!size) {
            size = 0;
        }

        if (color.startsWith('0x')) {
            color = color.substring(2);
        }
        if (color.length == 3) {
            color = [parseInt(color.substring(0, 1), 16) * 17, parseInt(color.substring(1, 2), 16) * 17, parseInt(color.substring(2, 3), 16) * 17];
        } else if (color.length == 6) {
            color = [parseInt(color.substring(0, 2), 16), parseInt(color.substring(2, 4), 16), parseInt(color.substring(4, 6), 16)];
        } else {
            color = undefined;
        }
        if (!color) {
            color = [0, 0, 0];
        }

        // fuck the rest

        document.getElementById('planetNameCheck').innerText = name;
        document.getElementById('planetMassCheck').innerText = mass + ' kg';
        document.getElementById('planetSizeCheck').innerText = size + ' km';
        document.getElementById('planetColorCheck').innerText = color[0] + ', ' + color[1] + ', ' + color[2];

        // and fuck the rest again
    }

    planetCreator.onsubmit = (e) => {
        e.preventDefault();

        // same as oninput + create
    }

    function decimalString(number) {
        return Math.floor(number) + '.' + Math.floor(number * 10) % 10;
    }
}