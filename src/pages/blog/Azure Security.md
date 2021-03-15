---
title: Fundamentos de seguridad en Azure Security Center
date: 2021-03-15
---


```toc
```


# Azure Security Center
El centro de seguridad de Azure es un sistema central para manejar la seguridad de toda nuestra infraestructura, nos facilita la protección de todos los recursos que tengamos, ya sea que estén en Azure u on-prem.

El centro de seguridad revisa las configuraciones de seguridad en nuestros recursos y tiene la capacidad de hacer los cambios necesarios cuando iniciamos otro servicio, de manera totalmente automática. Al igual que Azure Advisor, nos puede dar recomendaciones para mejorar la seguridad de los recursos en base a auditorias constantes para detectar estas vulnerabilidades. También tiene la capacidad de detectar y bloquear malware en las maquinas virtuales que estemos ocupando. También se encarga de detectar y analizar potenciales ataques y amenazas que se presenten antes y después de cualquier evento. Por último, es capaz de controlar el acceso de los puertos en la red para que solo se habiliten cuando se necesite, esto se conoce como ‘Just-in-Time Access.’

## Puntaje de Seguridad

El centro de seguridad tiene la capacidad de mostrar un puntaje de seguridad en base a todos los análisis que hace. Este puntaje es el ‘Security Score’, nos ayuda a entender de mejor manera nuestra postura de ciberseguridad e identificar los puntos de oportunidad para mejorarla.  Entre mayor sea el puntaje, mayor es la cantidad de controles de seguridad que pasamos, es decir necesitamos cumplir con todas las recomendaciones que nos hace Azure para poder tener un buen puntaje. 

Las recomendaciones de seguridad están directamente relacionadas con las políticas de seguridad y cada una tiene un puntaje máximo con el que pueden aportar a tu puntuación de seguridad. Se pueden personalizar las recomendaciones creando excepciones especiales a las políticas de seguridad. Las políticas son condiciones definidas en el portal, la línea de comandos o Powershell. Estas políticas de seguridad pueden ser colocadas como ‘auditorias’ o como ‘forzadas’, la primera es un reporte que se hace, Azure verifica que se cumplan las condiciones y reporta sobre la respuesta. Las políticas forzadas no generan reporte alguno, si no que se activan automáticamente en los recursos.
Los controles de seguridad están basados en mejores prácticas y entre los más importantes están
Activar la autenticación de múltiples factores
Manejo seguro de puertos, en grupos de seguridad de redes y en máquinas virtuales individuales.
Actualizaciones de los sistemas en cada servicio de IaaS
Encriptación de datos en tránsito y estáticos
Restricciones al acceso de red
Manejo de permisos y accesos
Entre otros

## Mapa de red
Otra herramienta del centro de seguridad es el mapa de red que nos muestra de manera visual un estatus de la red y los recursos en cada una. Aquí se ve si cada nodo esta correctamente configurado y como los nodos están conectados entre sí. Bloquear y permitir conexiones entre nodos también es fácil usando este mapa.
## Just-in-Time Access
Para mantener seguros los recursos computacionales se puede usar el acceso JIT, es la capacidad de bloquear y desbloquear los puertos en momentos específicos. Esto es porque agentes malignos están constantemente escaneando puertos abiertos en nuestros recursos, creando una superficie de ataque amplia.
Este servicio toma como referencia los permisos que se asignan a cada rol con el sistema de RBAC. Para cada grupo de maquinas virtuales en una red segura (NSG) se colocan reglas de acceso a los puertos, que bloquea todo el trafico entrante a cada puerto y cuando se hace una petición con un rol con permisos suficientes, entonces se le da el acceso a la red a la o las IP’s que lo solicitan, una vez que se completa la conexión, el centro de seguridad regresa a los grupos de red a su estado inicial, bloqueando todas las peticiones de nuevo.
