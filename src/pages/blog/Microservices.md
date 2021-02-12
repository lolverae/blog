---
title: Introduction to microservices | Google's Course on Coursera
date: 2020-06-13
---

# Microservices

Monilithic apps have all their features in a single code base and a single data base.

Microservices architecture means that apps have multiple code bases and multiple data bases, this means we want to pick the best data solution for the service.

We want to deploy an app based in microservices if we need to scale some components individually. 
With 

Usually microservice architecture:

- Easier to develop and maintain but with a more complex communication between the services, usually we need to pick secure connections for every service.
- Are less prone to error and have less risks deploying new versions, because of the rollbacks. This at the cost of more deployments.
- You can scale specific services independently. 
- Can use different languages and frameworks but you need to pay attention to compatibility.
- You can choose the runtime for each service

When changing the development approach from monolithic to microservices based, it is recommended that you decompose applications by feature, you organize services by architectural layer and isolate services that provide shared functionality.


## Best practices
There are 12 practices that can be considered as the best

- Use one codebase with strong revision control
- Explicitly declared dependencies (libraries), using package managers like pip. 
- The enviroment should be stored in a config file
- Have resilient backing services, attached to each service and should be easily swapable.
- Deployment should be separated in build, release and run stages. Where build is creating the deployment package, putting the configuration in a runtime enviroment and executing the app.
- The app should be executed as one or more stateless processes 
- Each service is binded to a specific port
- Since services run independently, they run in separated processes, which scale easily by adding new instances for the process.
- Apps should be written in a robust and reliable way with fast startup, because they need to deploy and scale quickly.
- The development enviroment should be paired to keep the stages similar, using docker is useful
- We should treat logs as event streams 
- Admin tasks should be run as a repeatable and automated on-off process but shouldn't be a part of the app