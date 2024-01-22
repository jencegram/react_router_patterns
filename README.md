# React Router Dog Finder

## Overview

Welcome to my React Router Dog Finder project! As a beginner in the vast world of React development, I embarked on this journey to understand the core concepts of routing in React using `react-router-dom`. This project allowed me to grasp how URL parameters work, the importance of the `Switch` (or `Routes` in the latest React Router) component, different ways to implement redirects, and how to structure components for optimal routing and user experience.

### Goals Achieved

- **Working with Router URL Parameters:** I learned how to use URL parameters to show different information for each dog dynamically.
- **Setting Up Routing:**  I got familiar with using Routes (replacing Switch in the latest React Router) to manage where each link takes you in the app.
- **Managing Redirects:**  I explored how to automatically send users to the main dogs list if they type in a URL that doesn't exist in the app.
- **Beginning to Test Routes:** I started learning about how to check if my routing components work correctly.

## Features

- **Dog List View (`/dogs`):** Displays a list of all available dogs. Each dog has a name, image, and a link to view more details.
- **Dog Details View (`/dogs/:name`):** Shows detailed information about each dog, including age, a list of fun facts, and an image.
- **Redirects:** Any undefined routes are redirected to the Dog List View (`/dogs`).

## Technologies Used

- **React:** For building the user interface.
- **React Router DOM:** For managing routing in the application.
- **CSS:** For styling components.

## Project Structure

- `App.js`: The root component that renders the `Nav` and `AppRoutes` components.
- `Routes.js`: Defines all the routes for the application.
- `DogList.js`: Renders the list of all dogs.
- `DogDetails.js`: Renders the details of a specific dog.
- `Nav.js`: Contains the navigation bar for the application.
- `styles.css`: Contains all the styling for the application.

## Reflection

As a beginner, this project was both challenging and rewarding. It gave me a hands-on experience with React Router and a deeper understanding of component-based architecture in React. I learned the importance of structuring the project efficiently and the power of routing in single-page applications.

I hope you enjoy navigating through the Dog Finder app as much as I enjoyed building it!


