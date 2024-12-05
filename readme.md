# Recipe API - README

Welcome to the DP API of this recipe application. This README provides step-by-step instructions on how to get the backend environment up and running, how to seed the database, and how to start the server.

## Prerequisites

- **Docker** and **Docker Compose**: Make sure you have Docker and Docker Compose installed on your machine. You can find installation instructions here:  
  - [Docker Installation](https://docs.docker.com/get-docker/)  
  - [Docker Compose Installation](https://docs.docker.com/compose/install/)  
- **Yarn**: The project uses `yarn` as its package manager. If you don't have Yarn installed, please follow the instructions:  
  - [Yarn Installation](https://classic.yarnpkg.com/en/docs/install/)

## Getting Started

1. **Clone the Repository**  
   ```bash
   git clone git@github.com:camarvito/dp-recipe-api.git
   cd dp-recipe-api
   ```

2. **Install Dependencies**
 ```bash
   yarn install
 ```

3. **Start Docker Services**
 ```bash
   docker-compose up -d
 ```

 This command spins up the necessary services defined in the docker-compose.yml file in the background.

Note: Ensure that the MONGODB_URI in your .env file matches the configuration defined in docker-compose.yml.

3. **Seed the database**
 ```bash
   yarn seed
 ```

4. 3. **Create the .env file (example in the project) and start the application**
 ```bash
   yarn start
 ```

The server will run on the port defined in your .env (usually 3001). Once started, you can access the API endpoints at http://localhost:3001.