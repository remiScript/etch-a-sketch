
let container = document.getElementById('container');
let newHeight = 0;
let newWidth = 0;
let slider = document.getElementById("size");
let output = document.getElementById("demo");
output.innerHTML = slider.value;
document.getElementById('newGridButton').addEventListener('click', function() {
    generateGrid(slider.value);
});



slider.oninput = function() {
    output.innerHTML = this.value;
}

function generateGrid(dimension) {
    // delete the previous grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (i = 0; i < dimension ** 2; i++) {
        
        // create a div for each grid space, add class
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', "gridItem");
        newDiv.classList.add('gridItem');

        // calculate height since this differs based on number of grid items
        newDimension = (Math.floor((500 / dimension)*10) / 10).toString();

        // append custom height/width to styling
        newDiv.style.height = newDimension + "px";
        newDiv.style.width = newDimension + "px";

        // add grid items to parent container
        container.appendChild(newDiv); 
    
}

// create algorithim for generating new grid
    // ask user for grid size

}
