const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(array) {
  let sum = 0;
	for(let i = 0; i < array.length; i++)
  {
    sum += array[i];
  }

  return sum;
};

const multiply = function(array) {
  multiplet = array[0]
  for(let i = 1; i < array.length; i++)
  {
    multiplet *= array[i];
  }
  return multiplet;
};

const power = function(x,y) {
powered = x
for (i = 1; i < y; i++)
{
  powered *= x;
}

return powered;
};

const factorial = function() {
	
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
