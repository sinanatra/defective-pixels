function generatepixels(numberOfPixels, containerId) {
    const colors = ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(0, 0, 0)", "rgb(255, 255, 255)"];

    const data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];

    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            const pixelData = data[i];
            placePixel(pixelData);
        }
    }

    for (let i = 0; i < numberOfPixels; i++) {
        const pixelData = [
            Math.floor(Math.random() * 100) + 1,
            Math.floor(Math.random() * 100) + 1,
            colors[Math.floor(Math.random() * colors.length)]
        ];
        data.push(pixelData);
        placePixel(pixelData);
    }

    localStorage.setItem("data", JSON.stringify(data));

    function placePixel(storedData) {
        if (storedData) {
            const pixel = document.createElement("div");
            pixel.classList = "pixel " + storedData[2];
            pixel.style.position = "fixed";
            pixel.style.top = storedData[0] + "%";
            pixel.style.left = storedData[1] + "%";
            pixel.style.width = "1px";
            pixel.style.height = "1px";
            document.getElementById(containerId).appendChild(pixel);
        }
    }

    return data;
}

module.exports = generatepixels;