# Local Setup Guide

This guide outlines the step-by-step process to build the Spring Boot microservices and run the entire ecosystem locally using Docker Compose.

:::tip
Ensure that all the tools mentioned in the **Prerequisites** are correctly installed and available in your terminal before starting.
:::

## 1. Build the Microservices

Before spinning up the containers, you need to compile the source code and package the microservices into runnable JAR files. 

Navigate to the root directory `ops` and run:

```bash
mvn clean package -DskipTests
```

:::info
Using `-DskipTests` speeds up the initial build process by bypassing the execution of unit tests.
:::

## 2. Build Docker Images

Once the Spring Boot JAR files are generated, build the Docker images for all services defined in your Docker Compose configuration.

```bash
docker-compose build
```

## 3. Run the System

Start the entire microservices architecture in the background (detached mode):

```bash
docker-compose up -d
```

:::tip
Microservices often rely on **Discovery Services (Eureka)** or configuration servers. Allow a few moments for the base infrastructure to fully initialize so that the API gateway and business services can register correctly.
:::

## 4. Verify Services

To ensure all containers are running properly, use:

```bash
docker-compose ps
```

You can also check the startup logs of a specific service to verify it registered successfully:

```bash
docker-compose logs -f <service-name>
```

*(e.g., `docker-compose logs -f eureka-server`)*

## 5. Shut Down the System

To gracefully stop all running services without removing their containers:

```bash
docker-compose stop
```

To stop the services and remove the containers and default networks entirely:

```bash
docker-compose down
```

:::info
If you need to wipe out the database data or other persistent data mapped via named volumes, append the `-v` flag: `docker-compose down -v`.
:::
