# Deciphering the path to the airport

In this project, based on the day-3 requirements of the Advent of Code (2020), the goal is to determine the number of trees encountered by following certain predefined movement patterns throughout a given map. A sample of the input used as the argument of the treesEncountered function, is the following one, 

...#.....#.......##......#.....<br>
...#..................#........<br>
....##....#.......#............<br>
.........#.......#.......#.....<br>
..#..............#.........#..#<br>
.....#.........#....#....#....#<br>
....##..........#.#.##.........<br>
...#....##...#...#...#.#..#....<br>
...#.......###..........#......<br>
.........#.....#....#...#.#....<br>
.#...###..#..##..#.........###.<br>
#.#...#..........###...#....#..<br>
#....#.#..#..........#.......#.<br>
.#..#........##.#..............<br>
............#..#.#............#<br>
.............#..........#......<br>
...#.......#...............#...<br>
.#...#..#..#............#..#...<br>
....##.##..................#.##<br>
#......#...#..##....#.....#...#<br>
#..#..........##....#...###....<br>
##......#.##.#......#..#......#<br>
....#...#.......##.##...#.#..#.<br>
##.#...#....#...#...#........#.<br>
........#..#.....#....#.......#<br>
.#......#......#..............#<br>
.#.....#..#..#..#..#..#....#..#<br>
.......#.....#.................<br>
.#......#...#..#..#...#...#....<br>
.........#..#..#.........#.....<br>
.....#.........#.#..........#..<br>

(first 30 lines of the map...)

In order to run the script, clone this repo and then,

1. Provide the `givenMap.txt` file with the desired map;
2. Change the movingPattern object inside the pathToAirport.js file so that it matches the desired movement pattern;

Last but not least, while in the root directory of the project, run the following command in the terminal,

```bash
$ node pathToAirport.js
``` 