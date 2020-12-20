function treesEncountered() {
    let fs = require('fs');
    let mapPath = fs.readFileSync('./givenMap.txt').toString().split('\n');

    let numOfTrees = 0;
    let singlePathLength = mapPath[0].length;

    // for navigating throughout the map, x-y coordinate equivalents are used in the form of array indices. Thus, [0][0] corresponds to (x,y) = (0,0)
    let movingPattern = {
        dx: 3,
        dy: 1
    }

    let currentPos = {
        x: 0,
        y: 0
    }

    for (let step = 0; step < mapPath.length; step++) {
        if (mapPath[currentPos.y][currentPos.x] === '#') {
            numOfTrees++;
        }
        if (currentPos.x + movingPattern.dx > singlePathLength - 1) {
            currentPos.x = currentPos.x + movingPattern.dx - singlePathLength
        }
        else {
            currentPos.x += movingPattern.dx;
        }
        currentPos.y += movingPattern.dy;
    }

    return numOfTrees;
}

let result = treesEncountered();
console.log(result);