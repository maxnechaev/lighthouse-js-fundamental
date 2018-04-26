var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < 8) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (var ingr = 0; ingr < ingredients.length; ingr++) {
  console.log(ingredients[ingr]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var ingrRev = ingredients.length; ingrRev >= 0; ingrRev--) {
  console.log(ingredients[ingrRev]);
}