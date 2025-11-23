turn on x1,y1 through x2,y2

turn off x1,y1 through x2,y2

toggle x1,y1 through x2,y2

const size = 1000;
const grid = Array.from({ length: size }, () => Array(size).fill(0));

const = /(turn on|turn off|toggle) through/;

for(let x = x1; x <= x2; x++) ;{
  for(let y = y1; y <= y2; y++)
     if (action === "turn on") {
       grid[x][y] = 1;
     } else if (action === "turn off"){
       grid[x][y] = 0;
     } else if (action === "toggle"){
       grid[x][y] = grid[x][y] === 0 ? 1 : 0;
     }
}

for(let x = 0; x < size; x++);{
  for(let y = 0; y < sire; y++) {
     if (grid[x][y] === 1);
  }
}
const instructions = [
"turn on 887,9 through 959,629",
"turn on 454,398 through 844,448",
"turn off 539,243 through 559,965",
"turn off 370,819 through 676,868",
"turn off 145,40 through 370,997",
"turn off 301,3 through 808,453",
"turn on 351,678 through 951,908",
"toggle 720,196 through 897,994",
"toggle 831,394 through 904,860"
];
