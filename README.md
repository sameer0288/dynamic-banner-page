# Dynamic Banner Website

## Overview

This project implements a dynamic one-page website using React for the frontend and Node.js/Express for the backend. It features a configurable banner that includes a description, timer, link, and visibility toggle. The banner's settings are managed via an internal dashboard and stored in a MySQL database.

## Features

- **Frontend:**
  - Toggle the visibility of the banner.
  - Display a countdown timer on the banner.
  - Update banner description and link.
- **Backend:**
  - API endpoints to fetch and update banner settings.
  - MySQL database integration.

## Project Structure

dynamic-banner-website/
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── bannerController.js
│ ├── models/
│ │ └── Banner.js
│ ├── routes/
│ │ └── bannerRoutes.js
│ ├── app.js
│ └── server.js
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Banner.js
│ │ │ ├── CountdownTimer.js
│ │ │ └── Dashboard.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── api/
│ │ └── bannerApi.js
├── .gitignore
├── package.json
├── README.md

sql
Copy code

## Backend Setup

1. **Install Dependencies:**

    Navigate to the `backend` directory and install the necessary dependencies:
    ```bash
    cd backend
    npm install
    ```

2. **Configure Database:**

    Edit `backend/config/db.js` to match your MySQL configuration.

3. **Create Database and Table:**

    Create a MySQL database and table using the following SQL script:

    ```sql
    CREATE DATABASE IF NOT EXISTS dynamic_banner;

    USE dynamic_banner;

    CREATE TABLE IF NOT EXISTS banner_settings (
        id INT PRIMARY KEY AUTO_INCREMENT,
        description VARCHAR(255),
        timer INT,
        link VARCHAR(255),
        isVisible BOOLEAN
    );

    INSERT INTO banner_settings (description, timer, link, isVisible)
    VALUES ('Sample Banner', 60, 'http://example.com', TRUE);
    ```

4. **Start the Server:**

    Run the backend server:
    ```bash
    node server.js
    ```

## Frontend Setup

1. **Install Dependencies:**

    Navigate to the `frontend` directory and install the necessary dependencies:
