
let container = document.getElementById('container');
let newHeight = 0;
let newWidth = 0;
let slider = document.getElementById("size");
let output = document.getElementById("demo");
output.innerHTML = slider.value;
let red = 0;
let blue = 0;
let green = 0;
let rainbowMode = false;

slider.oninput = function() {
    output.innerHTML = this.value;
}

document.getElementById('rainbowMode').addEventListener('click', function(){
    rainbowMode = !rainbowMode;
    document.getElementById('rainbowIndicator').innerText = "Rainbow Mode: " + rainbowMode;
    console.log(rainbowMode);
})


function mouseEnter(e){

        if (rainbowMode == false) {
            let backGroundString = e.target.style.backgroundColor;
            backGroundString = backGroundString.substring(4, backGroundString.length-1).replace(/ /g, '').split(',');
            let thisRed = backGroundString[0];
            let thisBlue = backGroundString[1];
            let thisGreen = backGroundString[2];
            e.target.style.backgroundColor = `rgb(${thisRed -= 50}, ${thisBlue -= 50}, ${thisGreen -= 50})`;    
        } else {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
        }
        
        // console.log(e.target.style.backgroundColor);
        // console.log(e);
        // console.log('red: ' + red);
        // console.log('blue: ' + blue);
        // console.log('green: ' + green);
}

document.getElementById('newGridButton').addEventListener('click', function() {
    generateGrid(slider.value);
});

function generateGrid(dimension) {
    // delete the previous grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // set all grid backgrounds to white
    red = 255;
    blue = 255;
    green = 255;

    for (i = 0; i < dimension ** 2; i++) {
        
        // create a div for each grid space, add class
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', "gridItem");
        newDiv.classList.add('gridItem');

        // calculate height since this differs based on number of grid items
        newDimension = (Math.floor((600 / dimension)*10) / 10).toString();

        // append custom height/width to styling, and default BG color
        newDiv.style.height = newDimension + "px";
        newDiv.style.width = newDimension + "px";
        newDiv.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;

        // add event listener for grid item
        newDiv.addEventListener('mouseenter', mouseEnter);

        // add grid items to parent container
        container.appendChild(newDiv); 
    
}
    return [red, blue, green];

// create algorithim for generating new grid
    // ask user for grid size

}

document.getElementById("clearGridButton").addEventListener('click', function(){
    let red = 255;
    let blue = 255;
    let green = 255;
    // let container = document.getElementById('container');
    let containerChildren = document.querySelectorAll('#container > .gridItem');
    containerChildren.forEach(element => {
        element.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    });
    return [red, blue, green];
})

document.getElementById("clearGridWithNewColorButton").addEventListener('click', function(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    // let container = document.getElementById('container');
    let containerChildren = document.querySelectorAll('#container > .gridItem');
    containerChildren.forEach(element => {
        element.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    });
})






