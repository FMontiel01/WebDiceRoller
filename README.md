# Monopoly Dice Roller

Name: Fernando Montiel  
Project: Monopoly Dice Roller  

---

## Project Description

This project is a simple web application that simulates rolling dice for the board game Monopoly.
It rolls two six-sided dice and displays the values, the total number of spaces to move, whether the
roll is a double, and how many doubles have been rolled in a row. The application also reflects the
Monopoly rule where rolling three doubles in a row sends the player to jail.

The goal of this project is only to handle the dice rolling portion of the game. It does not attempt
to implement full Monopoly gameplay.

---

## Features

- Automatically rolls the dice when the page loads
- Uses random numbers to simulate two six-sided dice
- Displays the sum of the dice (spaces to move)
- Detects when a double is rolled
- Tracks consecutive doubles
- Indicates when three doubles in a row occur
- The Roll Dice button is auto-focused so pressing Enter rolls again
- Monopoly-themed user interface

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Git and GitHub
- Microsoft Azure (Static Website Hosting)

---

## How to Run the Application

### Running Locally

1. Download or clone the repository.
2. Make sure the following files are in the same directory:
	- index.html
	- styles.css
	- script.js
3. Open index.html in a web browser.
4. The dice will roll automatically when the page loads.
5. Press Enter or click the Roll Dice button to roll again.

### Azure Hosting

This project is hosted as a static website on Microsoft Azure.
No compilation or build steps are required.

---

## File Structure

/
├── index.html  
├── styles.css  
├── script.js  
├── README.md  
└── LICENSE  

All files extract directly into the main folder with no subfolders created.

---

## Coding Standards and Requirements

- All code compiles and runs without errors or warnings
- All files are UTF-8 compatible text files
- Tabs are used for indentation (not spaces)
- Line endings use LF (\n)
- Lines are kept within 100–120 characters
- Variable, function, and file names are descriptive and follow CamelCase conventions
- Source code is commented where necessary without excessive comments
- All random number fields are read-only and right-justified
- Only required source files, README.md, and LICENSE are included
- Git and GitHub were used to manage version control
- Each completed user story is associated with a descriptive GitHub commit message
- Plagiarism is not present, and all non-original work is properly credited

---

## AI Usage Disclosure

ChatGPT was used as a support tool to help clarify requirements, suggest UI styling ideas, and assist
with JavaScript logic for rolling dice. All suggestions were reviewed, understood, and tested by me.
Final decisions, implementation, and testing were done independently.

AI usage is disclosed at the top of each source code file as required.

---

## Credits

Monopoly is a trademark of Hasbro. This project is an educational assignment and does not use any
official Monopoly logos, artwork, or proprietary assets.

---

## License

This project is licensed under the MIT License.
See the LICENSE file for more information.
