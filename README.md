# E-Commerce 

This project is a simple e-commerce demo application that allows users to add, update, and view products. The application uses HTML, CSS, and JavaScript, and stores data in the browser's local storage. Below, you'll find the details on how to set up and use this project.

## Table of Contents

- [E-Commerce Demo](#e-commerce-demo)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Setup](#setup)
  - [Usage](#usage)
    - [Adding a Product](#adding-a-product)
    - [Updating a Product](#updating-a-product)
    - [Deleting a Product](#deleting-a-product)
    - [Searching for a Product](#searching-for-a-product)
    - [Navigating](#navigating)
  - [JavaScript Functionality](#javascript-functionality)
    - [index.js](#indexjs)
    - [Add.js](#addjs)
    - [navBar.js](#navbarjs)
    - [edit.js](#editjs)
  - [CSS Styling](#css-styling)

## Project Structure

The project consists of the following files:
- index.html
- index2.html
- index.css
- index.js
- Add.js
- navBar.js
- edit.js
- icon.jpeg


### index.html

This is the main page of the e-commerce demo, displaying the list of products.

### index2.html

This page is used for adding and updating products.

### index.css

This file contains the CSS styles used across the project.

### index.js, Add.js, navBar.js, edit.js

These JavaScript files contain the functionality for handling product data, navigation, and other interactive features.

### icon.jpeg

This is the favicon for the website.

## Setup

1. Clone the repository to your local machine.
2. Open `index.html` in your web browser to view the main page.
3. Open `index2.html` in your web browser to access the add/update product page.

## Usage

### Adding a Product

1. Navigate to `index2.html`.
2. Fill in the product details (title, description, price, and image).
3. Click "Add Now" to save the product. The product will be stored in local storage and displayed on the main page (`index.html`).

### Updating a Product

1. Navigate to `index.html`.
2. Click the edit icon on the product you want to update.
3. The product details will be loaded into the form on `index2.html`.
4. Update the details and click "Update Now" to save the changes.

### Deleting a Product

1. Navigate to `index.html`.
2. Click the delete icon on the product you want to remove.
3. Confirm the deletion in the popup.

### Searching for a Product

1. Use the search bar at the top of the main page (`index.html`) to filter products by title.

### Navigating

1. Use the navigation menu to switch between the home page and the add/update page.

## JavaScript Functionality

### index.js

Handles product data fetching and displaying. Also manages product updates from local storage.

### Add.js

Handles form submission for adding and updating products. Converts image files to base64 URLs for storage.

### navBar.js

Manages the navigation menu's open and close functionality.

### edit.js

Handles the editing of products, saving data to local storage for updating.

## CSS Styling

Defines the styles for the entire project, including the navigation menu, form elements, buttons, and product display.

```css
/* index.css */

/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

a {
    text-decoration: none;
    color: #333;
}

ol {
    list-style-type: none;
    padding: 0;
}

hr {
    border: 1px solid #ccc;
}

/* Navigation Styles */
nav {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: -250px;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

nav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

nav a:hover {
    color: #f1f1f1;
}

nav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

.op {
    font-size: 30px;
    cursor: pointer;
    display: inline-block;
    margin: 10px;
}

.op:hover {
    color: #818181;
}

/* Container Styles */
.container1 {
    margin-left: 300px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.head {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
}

.form1 {
    display: flex;
    flex-direction: column;
}

.label1 {
    margin: 10px 0 5px;
    color: #555;
}

.input1 {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.button1 {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}

.button1 a {
    color: white;
    display: block;
}

.button1:hover {
    background-color: #218838;
}


