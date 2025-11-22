turn on x1,y1 through x2,y2

turn off x1,y1 through x2,y2

toggle x1,y1 through x2,y2

const size = 1000;
const grid = None;

const = /(turn on|turn off|toggle) through/;

for(let x = X; x <= X; x++);{
  for(let y = Y; y <=; y++)
     if (action === "turn on") {
       = 1; 
     } else if (action === "turn off"){
       = 0;
     }else if (action === "toggle"){
       === 0 ? 1 : 0;
     }
}

for(let x = 0; x < grid; x++);{
  for(let y = 0; y < grid; y++) {
     if (x,y === 1)
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
