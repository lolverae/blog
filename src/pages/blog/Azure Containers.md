---
title: Exploring Containers in Azure
date: 2021-03-02
---
```toc
```

# Fundamentals

A container its a different way to do computing, as a quick refresher, Virtual Machines run on a stack consisting of an Hypervisor, guests operating systems and each application unique stack. 

<p align="center">
  <img width="400" height="auto" src="https://miro.medium.com/max/1600/0*NKv08csbRigHc2Y9" alt="Virtual Machine Stack">
</p>
Having multiple applications running on the multiple guest operating systems often leads to routinary maintenance tasks performed on the OS's which slowed deployment times for applications.


On the other hand containers can run on either a physical or a virtual machine, the machine has to have its own OS and a container runtime installed, in this runtime all of the containers have their own set of binaries related to the apps on them. Since the entire application is contained within a container image, to start an application we just have to start up the container from a container image.
<p align="center">
  <img width="400" height="auto" src="https://miro.medium.com/max/1021/1*v-BncAkY0kE9vlPki5P--Q.png" alt="Containers Stack">
</p>

Containers let you run and store your applications on a container image, basically we put all of the application's binaries on a nice package. When the container image is running then its called a container. Generally only one application runs on each container, therefore containers become very small and portable. One way to exchange and modify container images is using a container registry, which simplifies the sharing and operation of containers.

To configure a container we can use a tool like Docker to create a Dockerfile, basically a Dockerfile is just the commands to build container images, commonly used instructions in a Dockerfile include copying a compiled application binary into the container image and defining the starting scripts. After the container image is finished we push the image into a container registry (in Azure we use the service [Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/). After the functioning container image is in the container registry we then fire up an instance to run the container on. In Azure we use the [Azure Container Instances](https://docs.microsoft.com/en-us/azure/container-instances/).

## Example Structure

In an Example a Dockerfile is structured in this way:
1. We use a FROM instruction to define a base container image used to contain the application
2. We configure the enviroment 
3. Create a directory with the app we are going to host using the RUN and mkdir commands
4. We select the new directory as the working directory of the next instructions in the Dockerfile using the WORKDIR command
5. Copy the application binaries into the container using the COPY command
6. We copy any necesary scripts into the new directory and run then using the RUN command defining which shell we want to use to run the script
7. Expose the port of the application using the EXPOSE command
8. We use the ENTRYPOINT command to select which file or binary we want to start when the container is started
9. Use the command docker build to run all of the commands


# Azure Container Registry
This is a managed Docker Registry Service based on the open source Docker Registry, this service can be a key component of a CI/CD pipeline, allows you to build, store and manage container images. You can use this service to automate the build, test and push process for each image. 


ACR requires authentication for all operations supporting two types of login methos, using the Azure Active Directory service identity and the ACR administrator account, the latter being disabled by default and only needed in some scenarios. As with other IaaS solutions, it's possible to use RBAC with this service, however we can assing these roles to people and also tools. Azure has pregenerated roles for owner, contributor and reader. The roles AcrPull, AcrPush and AcrDelete are roles that we want to assing to service principals when using headless authentications for tools or container orchestrators. These roles have access to the data of ACR such as images but cannot administer ACR.


# Azure Container Instances

This service is a serverless container platform that allows us to deploy containers that can be accessed via an Azure Virtual Network or even the internet. This service allows for either Windows and Linux containers and we can (as always) select the required CPU and memory required by our applications. 

We can use another service like Azure Files to provide persistent storage to our applications and deploy multiple containers in batches to create more complex applications. 

There is also the posibility to create policies to tell Azure Container Instances what to do if an application inside a container fails, the three options we have are, restart always, restart on failure and restart never. The default policy is restart always.

As we said earlier, to deploy containers we need a container registry and we are not limited by Azure, we can use any registry we want, we only need the container image.