# BookStore-BackEnd

This project provides a simple RESTful API for the BookStore application, built using Node.js and Express. It connects to a MongoDB database to manage data.

## Features

* RESTful API endpoints for book management (you can specify more features here).
* Built with Node.js and Express.js.
* Uses MongoDB for data persistence.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

* **Node.js:** The latest Long-Term Support (LTS) version is recommended. You can download it from [nodejs.org](https://nodejs.org/).
* **npm (Node Package Manager):** npm comes bundled with Node.js.
* **MongoDB:** You need access to a running MongoDB instance, either locally or a cloud-hosted solution like MongoDB Atlas.

## Getting Started

1.  **Clone the Repository:**
    Open your terminal or command prompt and clone this repository to your local machine:
    ```bash
    git clone https://github.com/AtleCliveChurchill/BookStore-BackEnd
    cd BookStore-BackEnd
    ```

2.  **Install Dependencies:**
    Once inside the project directory, install all the necessary project dependencies (like Express, Mongoose, etc.):
    ```bash
    npm install
    ```

## Configuration

This application requires certain environment variables to be set, primarily for the database connection and server port.

1.  **Create a `.env` file:**
    In the root directory of the project, create a file named `.env`.

2.  **Add Environment Variables:**
    Populate the `.env` file with the necessary configuration. You can use the example below as a template.

    **`.env.example` (copy this to `.env` and update with your actual values):**
    ```env
    # MongoDB Configuration
    MONGODB_URI=mongodb+srv://atleclivechurchill:BookStorePassword@onlinebookstore.ylxlev8.mongodb.net/?retryWrites=true&w=majority&appName=OnlineBookStore

    # Server Configuration
    PORT=5000
    ```

    * `MONGODB_URI`: Your full MongoDB connection string.
        * For MongoDB Atlas, copy the connection string provided by Atlas.
    * `PORT`: The port on which the backend server will listen (e.g., `5000`, `3001`).

    **Important:** Ensure your `.env` file is added to your `.gitignore` file to prevent committing sensitive credentials to version control. If a `.gitignore` file doesn't exist, create one and add `.env` to it.

## Running the Application

Once the dependencies are installed and the `.env` file is configured:

   **Start the Server:**
    Run the following command in the project's root directory:
    ```bash
    node server.js
    ```
    Alternatively, if you have a start script defined in your `package.json` (e.g., `"start": "node server.js"`), you can use:
    ```bash
    npm start
    ```
