# Technology Stack

This document outlines the core technologies and frameworks utilized across the microservices ecosystem. The versions listed below are consistently managed via our parent `pom.xml`.

:::tip
By defining versions in the parent `pom.xml` via `<dependencyManagement>`, we ensure that all child microservices use compatible versions of Spring Boot and Spring Cloud, preventing classpath conflicts.
:::

## Component Matrix

| Category | Technology | Version | Purpose / Notes |
| :--- | :--- | :--- | :--- |
| **Programming Language** | Java | `17` | The standard JDK used to compile and run the application. |
| **Core Framework** | Spring Boot | `3.1.3` | Provides the foundation for building the auto-configured microservices. |
| **Cloud Framework** | Spring Cloud | `2022.0.4` | Ecosystem for distributed systems (Routing, Discovery, Configuration). |
| **Service Discovery** | Spring Cloud Netflix Eureka | `2022.0.4` (Inherited) | Allows components to find each other dynamically. |
| **API Gateway** | Spring Cloud Gateway | `2022.0.4` (Inherited) | Handles routing and filtering of incoming HTTP requests. |
| **Primary Database** | Microsoft SQL Server | *Latest* / External | Relational database mapped via JDBC (`jdbc:sqlserver://`). |
| **Identity Provider** | LDAP / Active Directory | External | Used by the `auth-service` for corporate single sign-on / authentication. |
| **Build Tool** | Apache Maven | N/A | Dependency management and build lifecycle. |
| **Containerization** | Docker | N/A | Packages the microservices into isolated executable environments. |
| **Orchestration** | Docker Compose | N/A | Used for local development to spin up the entire cluster easily. |

## Notable Absences (Future Enhancements)

Based on the current architecture, some typical distributed system components are **not currently deployed**:

- **Synchronous Internal Communication**: There is currently no `spring-cloud-starter-openfeign` configured for HTTP-based inter-service communication.
- **Asynchronous Messaging**: There is no Event Broker (like **Apache Kafka** or **RabbitMQ**) provisioned via Docker Compose or declared in the build files.
- **Distributed Caching**: Systems like **Redis** are not currently integrated into the local stack for session management or object caching.
