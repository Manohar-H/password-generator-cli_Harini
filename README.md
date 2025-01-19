# Password Generator CLI
A simple and customizable Command-Line Interface (CLI) application written in Node.js to generate secure passwords.

------

## Features:
- Generate passwords with **lowercase letters** by default.
- Specify the **length** of the password using the `--length` flag (default: 8).
- Customize the password by including:
  - **Uppercase letters** using the `--uppercase` flag.
  - **Numbers** using the `--numbers` flag.
  - **Symbols** using the `--symbols` flag.

------

## Installation:
1. Ensure **Node.js** is installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).
2. Clone this repository:
   ```bash
   git clone <repository-link>
3.	Navigate to the project directory:
    cd password-generator-cli
4.	Run the application using Node.js:
    node index.js

---

## Usage:
Run the CLI with the following options:
    node index.js --help (displays usage instructions)
    node index.js --length (specify the length of the password (default is 8).)
    node index.js --length 10 --uppercase (Include uppercase letters in the password.)
    node index.js --length 10 --numbers (include numbers)
    node index.js --length 10 --symbols (include special characters)

------

## Examples:
1.	Generate a password with the default settings: 8 lowercase letters:

    node index.js
    Example output: xjqpdmci

2.	Generate a password with 12 characters and include uppercase letters:

    node index.js --length 12 --uppercase
    Example output: XjQPDmCfRtUb

3.	Generate a password with 10 characters, including uppercase letters, numbers, and symbols:

    node index.js --length 10 --uppercase --numbers --symbols
    Example output: X@q9m4&Pc!

------

## Project Workflow:

This project uses Git and GitHub for version control. Each feature was developed on a separate branch and merged into the main branch via pull requests.

Branches and Features:
	•	feature/uppercase: Added support for uppercase letters.
	•	feature/numbers-symbols: Added support for numbers and symbols.

------

## Author:
Harini Manohar
A student developer building secure tools in Node.js.