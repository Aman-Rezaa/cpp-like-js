const readline = require('readline-sync');

// Cout (for output)
function cout(...args) {
    try {
        // Convert all arguments to strings and join them with a space
        const output = args.map(arg => String(arg)).join('');
        console.log(output);
    } catch (error) {
        console.error('Error in cout:', error.message);
    }
}

// Cin (for input)
function cin(promptText) {
    return readline.question(promptText);
}

module.exports = { cout, cin };