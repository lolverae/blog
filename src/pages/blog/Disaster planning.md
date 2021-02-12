---
title: Disaster planning | Google's Course on Coursera
date: 2020-07-08
---


# Disaster planning

For high availability we need to multiple zones in a region, that can be achieved by deploying to multiple servers that need to be orchestrated with a instance group, thet we create a failover database (replica DB) in another zone or use a distributed database

We can also create a testing service for a health check on our instances, this checkpoints verify that the services are up and that they can communicate to other services correctly. If a check fails, the instance group will create a new server and delete a broken one.
We can also configure our load balancers so they can only send connections to healthy services.

## Strategies

### Cold standby
Consists of snapshots of persistent disks, machine images and backups stored multi regionally. If the main region fails, we switch ther service to a backup region, you have to route requests to the new region

### Hot standby

Consists of snapshots of persistent disks, machine images and backups stored multi regionally. This time we use a global load balancer. For storing unstructured data in multi regions, for storing structured data we use a multi region DB
