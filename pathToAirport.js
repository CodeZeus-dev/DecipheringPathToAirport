function treesEncountered(latitude, longitude) {
    let fs = require('fs');
    let mapPath = fs.readFileSync('./givenMap.txt').toString().split('\n');

    let numOfTrees = 0;
    let singlePathLength = mapPath[0].length;

    // for navigating throughout the map, x-y coordinate equivalents are used in the form of array indices. Thus, [0][0] corresponds to (x,y) = (0,0)
    let movingPattern = {
        dx: parseInt(latitude),
        dy: parseInt(longitude)
    } // the moving pattern can be changed to whatever value the user desires

    let currentPos = {
        x: 0,
        y: 0
    }

    console.log("Current Round: " + movingPattern.dx + movingPattern.dy);
    for (let step = 0; step < mapPath.length; step++) {
        console.log(currentPos.x, currentPos.y);
        if (mapPath[currentPos.y][currentPos.x] === '#') {
            numOfTrees++;
        }
        if (currentPos.x + movingPattern.dx > singlePathLength - 1) {
            currentPos.x = currentPos.x + movingPattern.dx - singlePathLength
        }
        else {
            currentPos.x += movingPattern.dx;
        }
        if (currentPos.y + movingPattern.dy > mapPath.length - 1) {
            break;
        }
        else {
            currentPos.y += movingPattern.dy;
        }
    }

    return numOfTrees;
}

let result1 = treesEncountered(1, 1);
let result2 = treesEncountered(3, 1);
let result3 = treesEncountered(5, 1);
let result4 = treesEncountered(7, 1);
let result5 = treesEncountered(1, 2);
console.log(result1*result2*result3*result4*result5);