# E-Commerce Demo

This project is a simple E-commerce demo with functionality for viewing, adding, updating, and searching products. It consists of two main pages: index.html for product listing and searching, and index2.html for adding or updating products.

## Table of Contents
- Introduction
- Features
- Usage
- File Structure
- Technologies Used
- Scripts
- Styling
- External Libraries
- Search Functionality
- Popup and Edit
- Word Limit
- Local Storage
## Introduction
This project showcases a basic E-commerce model with the ability to display products, add new products, update existing products, and search for specific products. The project aims to provide a foundation for understanding and implementing simple E-commerce functionalities.

## Features
### Product Listing:

- Fetches product data from a fake API (https://fakestoreapi.com/products).
- Displays product images, titles, descriptions, and prices.
### Navigation:

- Navigation menu with links to the home page and the add/update page.
### Add/Update Products:

- Form on index2.html allows users to add new products or update existing ones.
- Supports providing a title, description, price, and image URL.
### Search Functionality:

- Allows users to search for products based on the entered text.
- Products dynamically update based on the search input.
### Popup and Edit:

- Confirmation popup appears when deleting a product.
- Clicking the edit icon stores product details for editing.
### Word Limit:

- Implements a word limit for product titles and descriptions.
- Ensures a clean and concise display of product information.
### Local Storage:

- Stores user inputs and product data in local storage.
- Retains data across page refreshes.
## Usage
- Clone the repository.
- Open index.html in a web browser to view the main product listing page.
- Navigate to index2.html to access the add/update form.
- Explore the various features and functionalities provided.
## File Structure
- index.html: Main page for product listing and searching.
- index2.html: Form page for adding or updating products.
- index.css: Stylesheet for both HTML files.
- apiAndLocal.js: Fetches product data from the API and handles local storage.
- navBar.js: Manages navigation and menu functionality.
- popup.js: Handles confirmation popups and edit functionalities.
- search.js: Implements the search functionality.
- wordLimit.js: Applies word limits to product titles and descriptions.
- edit.js: Manages editing and updating products.
- Add.js: Handles adding new products through the form.
## Technologies Used
- HTML5
- CSS3
- JavaScript
- jQuery (external library)
## Scripts
- apiAndLocal.js: Fetches product data from the fake API and handles local storage.
- navBar.js: Manages navigation and menu functionality.
- popup.js: Handles confirmation popups and edit functionalities.
- search.js: Implements the search functionality.
- wordLimit.js: Applies word limits to product titles and descriptions.
- edit.js: Manages editing and updating products.
## Styling
- index.css: Stylesheet for both HTML files.
- External fonts and icons from Google Fonts, Material Icons, and Font Awesome.
## External Libraries
- jQuery (v3.6.0): Included for additional functionality.
## Search Functionality
- The search input in index.html dynamically filters products based on the entered text.
- Products that match the search criteria are displayed, while others are hidden.
## Popup and Edit
- A confirmation popup appears when deleting a product.
- Clicking the edit icon stores product details for editing.
## Word Limit
- Word limits are applied to product titles and descriptions for a clean and concise display.
## Local Storage
- User inputs and product data are stored in local storage for data persistence.
- Retains data across page refreshes.
# Getting Started

To use the job application form, simply open the `index1.html` file in a web browser.

```bash
git clone https://github.com/connect-abdulbasit/E-Commerce.git
cd E-Commerce
