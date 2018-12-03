const fs = require("fs");
let total = 0;

function readLines(input, func) {
  let remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if(remaining.length > 0) {
      func(remaining);
    }
  });
}

function func(data) {
  total += Number(data);
  console.log(total);
}

var input = fs.createReadStream('input.txt');
readLines(input, func);
