function Game () {
  this.towers = [[3, 2, 1], [], []];

  const readline = require('readline');

  const reader = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
  });

  this.render_towers = function() {
    for (let i = 0; i < this.towers.length; i++) {
      console.log(`Tower${i+1}| ${this.towers[i]}`);
    }
      console.log("\n");
  };

  this.valid_move = function(sIdx, eIdx) {
      if ((sIdx < 0) || (sIdx > 2)) {
      return false;
    } else if ((eIdx < 0) || (eIdx > 2)) {
      return false;
    } else if (this.towers[sIdx].length <= 0) {
      return false;
    } else if ((this.towers[sIdx][this.towers[sIdx].length - 1]) >
      (this.towers[eIdx][this.towers[eIdx].length - 1])) {
      return false;
    } else {
      return true;
    }
  };

  this.make_move = function(sIdx, eIdx) {
    if (this.valid_move(sIdx, eIdx)) {
      let discToMove = this.towers[sIdx].pop();
      let endTower = this.towers[eIdx];
      endTower.push(discToMove);
    } else {
      console.log("Illegal move! Try Again.\n");
    }
  };

  this.game_over = function() {
    if (this.towers[1].length === 3) {
      return true;
    } else if (this.towers[2].length === 3) {
      return true;
    } else {
      return false;
    }
  };

  this.get_move = function() {
      reader.question("enter start & end (s, e)", function(coords) {
      let coordsArray = coords.split(",");
      let s = parseInt(coordsArray[0]);
      let e = parseInt(coordsArray[1]);

      console.log(`Start Tower: ${s}, End Tower: ${e}`);
      this.make_move(s, e);
      this.get_move();
    });
  };

  // this.run = function() {
  //   while (this.game_over() !== true) {
  //
  //   }
  // };

}

let x = new Game;
x.render_towers();
x.get_move();
x.render_towers();

console.log(x.game_over());
