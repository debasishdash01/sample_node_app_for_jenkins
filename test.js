const fetch = require('node-fetch');

console.log('Running tests...');

// Wait for server to start (Jenkins will handle this)
setTimeout(async () => {
    try {
        const response = await fetch('http://localhost:3000');
        const text = await response.text();
        if (text === 'Hello World!') {
            console.log('Test passed: Server responded with Hello World!');
            process.exit(0); // Success
        } else {
            console.error(`Test failed: Expected "Hello World!", got "${text}"`);
            process.exit(1); // Failure
        }
    } catch (error) {
        console.error(`Test failed: Could not reach server - ${error.message}`);
        process.exit(1); // Failure
    }
}, 2000); // Delay to ensure server is up
