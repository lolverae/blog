---
title: DNS | Google's Course on Coursera
date: 2020-06-15
---
```toc
```
# Domain Name Resolution
There are five primary types of DNS servers; caching name servers, recursive name servers, root name servers, TLD name servers, and authoritative name servers.
	Caching---->Generally provided by an ISP or your local network, store domain names lookups for a certain ISP or local network. Used to 		prevent waste of time by looking up an IP whenever connection is established.
	Recursive-->Generally provided by an ISP or your local network, store domain names lookups for a certain ISP or local network. Used to 		perform full DNS resolution requests. 
		(Usually your local name server will perform like a caching and recursive DNS server)
	Root DN---->When a recursive name server needs to perform a full recursive resolution it connects with the root name server. Root 			servers are responsible for directing queries toward the appropiate TLD name server. There are 13 in total.
	TLD server->Stands for Top Level Domain, is the last part of any domain name. ".com",".mx" etc.
	Auth server>Decides if the request for the IP is authorized. 
• DNS is an application layer service that uses UDP as a transport protocol, lately uses TCP for larger packet interchanges
• A DNS server never needs to care about doing anything but responding to incoming lookups
• DNS resolver simply needs to perform lookups and repeat them if they don't succeed

## DNS Records
• A record >> Used to point a certain domain, a single A record points to a single domain but a single domain can have multiple A records. 		This allows roung robin. 
• A Quad A record is very similar to an A record except that it returns in IPv6 address instead of an IPv4 address.
• A CNAME (canonical name) record is used to redirect traffic from one domain to another.
• MX stands for mail exchange and this resource record is used in order to deliver e-mail to the correct server. Only for mail services
• SRV stands for service record, and it's used to define the location of various specific services. Can be defined to return the specifics 		of different services 
• Text record >> TXT stands for text and was originally intended to be used only for associating some descriptive text with a domain name 		for human consumption. Used to convey additional data intended for other computers to process, some use it to communicate data not 			allowed	to communicate via DNS.
• SOA (Start of Authority)record >> Declares the zone and the name of the name server that is authoritative for it. 
• NS records >> indicate other name servers that may also be responsible for this zone
Subdomain->www
domain---->Google
TLD------->.com


## What is DHCP?
• Dynamic Host Configuration Protocol
• Its an application layer protocol that automates the configuration process of hosts on a network.
• Reduce the administrative overhead of having to configure lots of network devices on a single network
• Helps configure the network layer 
### DHCP Protocols
	1)Dynamic allocation. The most common. Sets aside a range of IPs for client devices and only one of thewe IPs is issued when requested
	2)Automatic allocatio. Sets aside a range of IPs for assignment purposes. And keeps track of which IPs it's assigned to certain devices in the past. With this protocol the DHCP can assign the same IP to the same machine each time, if possible.
	3)Fixed allocation. Requires a manually specified list of MAC address and the corresponding IPs.
The DHCP process initiates with the DHCP discovery, it has the next steps.
	1)The server discovery step. The DHCP clients sends a discover message out onto the network.
	2)The server examines its own configuration and would make a decision on what, if any, IP address to offer to the client. Responds with DHCPOFFER message.
	3)The server receives the DHCPREQUEST message and responds with a DHCPACK or DHCP acknowledgement message. 
Once a lease has expired, the DHCP client would need to negotiate a new lease by performing the entire DHCP discovery process all over again. A client can also release its lease to the DHCP server, which it would do when it disconnects from the network.

In order to operate on a modern network a computer needs to configurate the:
• A name server
• A subnet mask
• An IP address
• A default gateway

## What is a proxy?
A proxy service is a server that acts on behalf of a client in order to access another service. They sit between clients and servers providing anonymity, security, content filtering and other servers.
Web organizations use web proxies to direct all web traffic to a web proxy, allowing the proxy server to retrieve daata from the internet and store it in cache. But this method is old beacuse the connection of an ISP is fast enough. 
A more common use of a web proxy today might be to prevent someone from accessing sites. By using a web proxy, they can direct all web traffic to it, allow the proxy to inspect what data is being requested, and then allow or deny this request, depending on what site is being accessed.
A reverse proxy is a service that appears like a single server to external clients but represents many servers living behind it. Like Round Robin is a form of load balancing.
Reverse proxies are now implemented in order to use hardware built specifically for cryptography, to perform the enryption and decryption work. So that the web servers are free to just serve content.