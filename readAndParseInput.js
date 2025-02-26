const closestToZero = require('./closestToZero');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of temperatures: ', (N) => {
    const count = parseInt(N, 10);

    if (isNaN(count) || count <= 0) {
        console.error('Error: The number of temperatures must be a positive integer.');
        rl.close();
        process.exit(1);
    }

    rl.question('Enter the temperatures separated by space: ', (temps) => {
         if (temps.trim() === '') {
            console.log('0');
            rl.close();
            process.exit(1);
        }
        const temperatures = temps.trim().split(/\s+/).map(Number);

        // Validation for integer count
        if (count !== temperatures.length) {
            console.error('Error: The number of temperatures provided does not match the specified count.');
            rl.close();
            process.exit(1);
        }

        // Validation for non-number inputs
        for (const temp of temperatures) {
            if (isNaN(temp)) {
                console.error(`Error: One of the inputs is not a number: ${temp}`);
                rl.close();
                process.exit(1);
            }
        }

        // Validation for integer ranges
        for (const temp of temperatures) {
            if (temp < -273 || temp > 5526) {
                console.error(`Error: Temperature ${temp} is out of the valid range (-273 to 5526).`);
                rl.close();
                process.exit(1);
            }
        }

        const result = closestToZero(temperatures);
        console.log(result);
        rl.close();
    });
});