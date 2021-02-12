---
title: Rumbo al AI-900 [En inglés]
date: 2020-09-07
---

- [Introduction to AI](#introduction-to-ai)
  - [Setting up the labs](#setting-up-the-labs)
  - [The dataset](#the-dataset)
  - [Experiments](#experiments)
    - [Finished experiment](#finished-experiment)
  - [Deploying the model](#deploying-the-model)
# Introduction to AI

When I think of artificial intelligence the first thing that comes to mind is, predictions. One of basic things that you learn when to start reading about machine learning is that you can take a bunch of data about something, meaning inputs to a function and then predicting the expected output based on previous inputs. In math we define the function as 

$$
f(x)=y
$$
Where the *x* represents the inputs and *y* our outputs


Using Azure you can train and deploy machine learning models without too much work, Azure takes care of the preparation, training and deployment of the function we are going to use.

The first step to creating a machine learning model is pre-processing the data, and trying various types of model-training. Azure has capabilities that prepare, train and publish predictive services, also it offers a useful way of monitoring the resources we are using.

## Setting up the labs

For the labs we need to set up a workspace in Azure Machine Learning service, inside the studio pasge of MCSFT we can choose the computing services where we are going to host al of the magic, the available ones are:
- Compute instances, the most basic type of instacnce
- Compute clusters, fully scalable clusters of compute services that we can access on demand.
- Inference clusters, computing used by predictive services used in trained models.
- Attached compute, resources linked to other compute resources like VM's

While picking our computing resources we can choose the hardware characteristics, things like CPU, memory, GPU if available, etc.

## The dataset
Machines cannot learn without data, the models we create must be trained with existing data. In Azure we can configure a lot of things in our data, things like name, type of the dataset, a brief description, the file format, the delimiter character, the encoding, if the data has headers or not, we can define a schema.

When we configure out dataset we can create it using the Studio.

## Experiments

In Azure the training that we do in our models are called experiments, when creating an experiment in the Azure ML Studio we can create and configure new runs, there we can asing our experiment a name, a target column where we are going to perform the modeling and a compute resource. We can also select the type of task we want to do (like regression, inference, etc) and we can select a metric in which our model is going to be based (there are the ML algorithms we want to use) but we can also choose multiple types of tasks, meaning that we can train our model in various algorithms and then Azure will pick the one that gives us the best response. And finally we can set criteria to exit the experiment, that means that the experiment will stop after a certain amount of time or when a desired score is achieved.

### Finished experiment

When an experiment ends then we can review the best performing model out of all, this best model is identified based on the evaluation metric that we specified earlier. But it all comes down to what model gives us the lesser error. In the metrics tab we can see the performance of the models by selecting the desired graphs. We can visualize the model as an histogram, or a plot of *Predicted values* vs *True values* 

## Deploying the model 

After training and selecting the best performing model, we can deploy the model using Azure Container Instances or in a cluster of Azure Kuberneters. The container services is best for the testing and the Kubernetes instance is better for production enviroments. 

In the Azure ML Studio we can deploy a model by selecting it. When we deploy a model, Azure ML Studio shows us the Endpoints page, where we can consult our REST endpoint and its corresponding key.

We can the use our model in code by using the lines:
        
    endpoint = 'YOUR_ENDPOINT' #Replace with your endpoint
    key = 'YOUR_KEY' #Replace with your key

