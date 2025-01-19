#!/usr/bin/env node

// Get user arguments from the command line
const args = process.argv.slice(2);

// Helper function to display help
function displayHelp() {
  console.log(`
  Usage: node index.js [options]

  Options:
    --help       Show help message
    --length     Specify the length of the password (default: 8)
    --uppercase  Include uppercase letters in the password
    --numbers    Include numbers in the password
    --symbols    Include symbols in the password

  Example:
    node index.js --length 12 --uppercase --numbers --symbols
  `);
}

// Helper function to generate a password
function generatePassword(length, options) {
  let chars = 'abcdefghijklmnopqrstuvwxyz'; // Lowercase letters

  if (options.uppercase) {
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Add uppercase letters
  }
  if (options.numbers) {
    chars += '0123456789'; // Add numbers
  }
  if (options.symbols) {
    chars += '!@#$%^&*()_+[]{}|;:,.<>?'; // Add symbols
  }

  if (chars.length === 0) {
    console.error('No character set selected! Please use at least one flag to include characters.');
    process.exit(1);
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

// Parse command-line arguments
let length = 8; // Default length
let options = { uppercase: false, numbers: false, symbols: false };

if (args.includes('--help')) {
  displayHelp();
  process.exit(0);
}

if (args.includes('--length')) {
  const lengthIndex = args.indexOf('--length') + 1;
  const lengthArg = args[lengthIndex];
  if (!lengthArg || isNaN(lengthArg) || lengthArg <= 0) {
    console.error('Invalid length specified. Please provide a positive number.');
    process.exit(1);
  }
  length = parseInt(lengthArg, 10);
}

if (args.includes('--uppercase')) {
  options.uppercase = true;
}

if (args.includes('--numbers')) {
  options.numbers = true;
}

if (args.includes('--symbols')) {
  options.symbols = true;
}

// Generate and print the password
console.log(`Generated Password: ${generatePassword(length, options)}`);