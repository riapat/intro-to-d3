# Introduction to D3.js

This project provides a simple introduction to using D3.js for data visualization. We use npm to install necessary packages such as d3, parcel, and We use Parcel as our bundler and development server to streamline the build process and serve our code locally.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (Version 12 or higher)
- [npm](https://www.npmjs.com/get-npm) (Node package manager)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/riapat/intro-to-d3.git
cd intro-to-d3
```

### 2. Install the dependencies

```bash
npm install
```
This will install all the dependencies listed in the package.json file, including:

- d3: The D3.js library for data visualization.
- parcel: A development server and bundler for easy local development.
- eslint: A linter to help you write consistent JavaScript code.
- babel-eslint: Babel plugin to support experimental JavaScript features.

### 3. Review the .mjs files 
I have written comments in each .mjs file where the d3.js implementation resides to help you gain a better understanding of the purpose and usability of certain snippets. 

### 4. Start the Development Server
Once the dependencies are installed, you can start the development server using Parcel with the following command:
```bash
npm run start
```
This will serve the project locally. You can view it in your browser at http://localhost:1234.

### 5. Build the Project
To create a production build, run the following command:
```bash
npm run build
```
This will create a dist/ folder containing the build.
