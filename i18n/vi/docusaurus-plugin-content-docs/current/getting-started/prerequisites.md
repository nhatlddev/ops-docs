# Prerequisites

Based on the project configuration (`pom.xml`) and the Docker Compose setup, below is the required software and typical component stack needed to run this Spring Boot microservices ecosystem locally.

## Required Software

:::info
Ensure `JAVA_HOME` and your Maven bin directory are added to your system's `PATH`.
:::

- **Java Development Kit (JDK) 17**: The project is built using Java 17. 
  - *Tip: The project root includes OpenJDK 17 binaries (`OpenJDK17U-jdk_x64_windows_hotspot_17.0.10_7.zip` and JRE zip) if you need to install it manually.*
- **Apache Maven**: Required to compile the code and build the application JARs.
- **Docker**: Needed to run the applications and underlying infrastructure in isolated containers.
- **Docker Compose**: Used to define and run the multi-container application.

## Project Structure & Dependencies

The project is built on **Spring Boot 3.1.3** and **Spring Cloud 2022.0.4**, comprising the following core microservices:
- `api-gateway`
- `eureka-server`
- `auth-service`
- `common-service`
- `company-registration-service`
- `efs-service`
- `inventory-service`
- `it-device-management-service`
- `vehicle-service`
- `wms-service`

If any external dependencies (like databases, message brokers, caching mechanisms, etc.) are needed, they will be provisioned by the Docker Compose configuration automatically.
