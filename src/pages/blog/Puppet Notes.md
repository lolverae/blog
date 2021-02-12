---
title: Introduction to Puppet | Google's IT Automation Course on Coursera
date: 2020-08-27
---


# Puppet
## Introduction
Is a configuration management tool to configure multiple servers called "agents"
Is crossplataform, this means we can use the same rules for puppet on any plataform. Is an oper source project form 2005
- The client is called a "puppet agent"
- Th server is called "Puppet master"
- The agent sends info about the client to the master 

Puppet assigns providers according to predefined rules for the resource type and data collected from the system such as the family of the underlying operating system.

## Rules
These rules are settings that the client device needs to run an application from the server
### Example
    class sudo {
        package { 'sudo' : 
          ensure => present,
        }
    }
This rule establishes that the package sudo needs to be present in the agent
If this rule is applied to multiple agents it ensures an installation of the package

Here we declared that we needed a package resource

    Resources are the basic unit for modelling the configuration that we want to manage

In the next example we declare a file type resource, this type of resource is useed for managing files and directories.
### Example
    class sysctl {
        files { '/etc/sysctl.d':
          ensure => directory,
        }
    }
This rules ensures that '/etc/sysctl.d' file exists AND is a directory

We can set other attributes
### Example    
    class timezone {
    file { '/etc/timezone':
          ensure => file,
          content => "UTC\n",
          replace => true,
        }
    }
This resource has 3 attributes
1. We set the resource to be a file
2. We change the format of time to UTC
3. We specify that the contents of a file can be **replaced**

## Classes
These collect the resources that are needed to achieve a goal in a single place. 

By grouping related resources together, we can more easily understand the configuration and make changes in the future.

It simplifies configuration management by, for one example, allowing us to apply a single class to each host rather than having to specify every resource for each host separately and possibly missing some.
### Example
    class ntp{
        package { 'ntp':
          ensure => latest,
        }
        file { '/etc/ntp.conf':
          source => 'puppet:///modules/ntp/ntp.conf'
          replace => true,
        }
        service { 'ntp':
          enable => true,
          ensure=> running,
        }
    }

We have a class with three resources, a package, a file and a service
- We ensure the *ntp* package is in the latest release
- The specified file needs to be from the specified source location and the content can be replaceable
- The service 'ntp' is going to be enabled and running

## Domain Specific Lenguage for Puppet
Puppet handles configuration for enviroment of an agent with **enviroment level variables** known as *Facts*

Facts are variables that represent the characteristics of the system. Each resource has its own facts and in Puppet the user has the leverage to build their own custom facts.
### Example from tutorialspoint
    [root@puppetagent1 ~]# facter
    architecture => x86_64 
    augeasversion => 1.0.0 
    bios_release_date => 13/09/2012 
    bios_vendor => innotek GmbH 
    bios_version => VirtualBox 
    blockdevice_sda_model => VBOX HARDDISK 
    blockdevice_sda_size => 22020587520 
    blockdevice_sda_vendor => ATA 
    blockdevice_sr0_model => CD-ROM 
    blockdevice_sr0_size => 1073741312 
    blockdevice_sr0_vendor => VBOX 
    blockdevices => sda,sr0 
    boardmanufacturer => Oracle Corporation 
    boardproductname => VirtualBox 
    boardserialnumber => 0 

When the puppet agent runs it runs the program "Facter" which analyzes the current system and gathers these facts.
Then it sends the values to the puppet master which uses them to calculate the rules that should be applied. 
### Example from Google Course
    if $facts['is_virtual'] {
        package { 'smartmontools':
          ensure => purged,
        }
    } else {
        package { 'smartmontools':
          ensure => installed,
        }
    }
Here we use the 'is_virtual' fact to indicate a desicion for 'smartmontools' 
We use conditional statements 

### Syntax
- Variables are represented with a ***$*** in front of the variable's name
- Fact variables are stored in a hash, this makes possible to access each element of a hash using a key
- Every resource starts with the type of resource being defined
- The content of a resources is inside curly brackets
- The title of a resources is placed on top and between ' ' and then a colon (:)
- After the resource's name we place the attributes
- The value for an attribute is after a *=>* and ends with a comma
- We specify the package contents inside the curly braces, placed after the package title.

## Puppet as a declarative lenguage
Puppet is a declarative lenguage, meaning that we *declare* the needs of an agent, one important characteristic for the facts and declarations is that they need to be idempotant actions to avoid errors.
    
    Idempotent actions are those that the result from them is the same always and no unexpected results will happen
    Meaning we can repeat a task without errors

To make an action idempotent we can use the <span style= "color:#6699ff"> onlyif</span> command on puppet
### Example
    exec { 'move example file':
      command => 'mv /home/user/example.txt /home/user/Desktop',
      onlyif => 'test -e /home/user/example.txt
    }
In this example we run the command only if the file that we want to move exists.
### Qwiklabs example
    class profile {
            file { '/etc/profile.d/append-path.sh':
                    owner   => 'root',
                    group   => 'root',
                    mode    => '0646',
                    content => "PATH=/java/bin\n",
            }
    }

- It sets both the owner and group of the file to "root
- It then sets the "mode" of the file to "0646". This number represents the permissions the file will have.
- Finally, it sets the actual contents of the file. Here, the content is being set to"PATH=/java/bin\n".

The numbers for "mode" represent the number of permissions of a file, 4 for read, 2 for write and 1 for execute. The sum of the permissions given to each of the groups is then a part of the final number. 
    
    For example, a permission of 6 means read and write, a permission of 5 means read and execute, and a permission of 7 means read, write and execute.

There are 4 numbers on a mode for a file
1. Special permissions
2. Permissions for the owner
3. Permissions for the group
4. Permissions for the others


## Managing resources
When we want to manage puppets with resources that communicate with each other but are not directly installed on every agent we can use resource relationships.
To indicate this relations, we must use the syntax properly

    We write resource types in lowercase when declaring them, but capitalize them when referring to them from another resource's attributes. 
After all of the code we indicate the package inclution
### Example
    class ntp {
      package { 'ntp':
        ensure => latest,
      }
      file { '/etc/ntp.conf':
        source => '/home/user/ntp.conf',
        replace => true,
        require => Package['ntp'],
        notify => Service['ntp'],
        }
      sercice { 'ntp':
        enable => true,
        ensure => running,
        require => File ['/etc/ntp.conf'],
        }
    }
    include ntp

## Puppet organization
We can organize our manifests (the pp. file) grouping them up in a module. Inside a module we have different folders cotaining data depending of the use of it. We usually have a folder for manifests, templates and another one for files, etc.

The basic folders are arranged in a way that the main manifest is stored in a file called **init.pp**

## Nodes
A node definition, also known as a node statement, is a block of Puppet code that is included only in matching nodes' catalogs. This allows you to assign specific configurations to specific nodes.
### Syntax
- The node keyword.
- The node definition name: a quoted string, a regular expression, or default.
- An opening curly brace.
- Any mixture of class declarations, variables, resource declarations, collectors, conditional statements, chaining relationships, and functions.
- A closing curly brace.

      # <ENVIRONMENTS DIRECTORY>/<ENVIRONMENT>/manifests/site.pp
      node 'www1.example.com' {
        include common
        include apache
        include squid
      }
      node 'db1.example.com' {
        include common
        include mysql
      }

When defining nodes we specify the FQDN (that contains both the hostname and the domain name) fot the node we want this set of rules

Puppet uses SSL to certificate connections and thus, after a node connection happens, the puppet master automatically checks for a SSL certificate, after receiving a certificate, the node will reuse it for subsequent logins.
This certs use PKI (Public Key Infrastructure) to authenticate both nodes and masters.