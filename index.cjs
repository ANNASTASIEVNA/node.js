const colors = require('colors')


const numbers = process.argv.slice(2);
console.log(numbers);

function simpleNumbers(first, last) {
  if (!Number.isInteger(first) || !Number.isInteger(last)) {
    console.log(colors.red);
    return;
  } else {
    let color = 1;
    for (i = first; i <= last; i++) {
      if (i < first || i > last) {
        console.log(colors.red);
      } else {
        switch (color) {
          case 1:
            console.log(colors.green(i));
            break;
          case 2:
            console.log(colors.yellow(i));
            break;
          case 3:
            console.log(colors.red(i));
            break;
        }
        color++;
        if (color > 3) color = 1;
      }
    }
  }
}
simpleNumbers(Number(numbers[0]), Number(numbers[1]));