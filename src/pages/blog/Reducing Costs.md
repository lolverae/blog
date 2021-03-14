---
title: Reduciendo costos en Azure 
date: 2021-03-13
---


```toc
```


# Reduciendo costos en Azure 

Una de las principales ventajas que nos trae la computación en la nube, es la eliminación de un gasto capital inicial casi por completo, pasando a un modelo de costos puramente operacional. A esto se refieren las múltiples plataformas de la nube cuando se dice 'paga lo que consumes'. Sin embargo, hay que tener en cuenta que los servicios en la nube, aunque hace desaparecer una gran preocupación monetaria, también pueden ser una potencial causa de gastos innecesarios y de incluso desastres monetarios.
### Desastres monetarios
Primero hablemos de los desastres monetarios. De todas las características de los servicios de nubes públicas, la elasticidad está entre el top de ventajas, ¿quién no quiere que su sitio web pueda cumplir solo las peticiones necesarias? Aunque suena genial, la elasticidad puede convertirse en un arma de doble filo si no se siguen buenas prácticas de uso.

### Algoritmos lentos
¿Qué pasaría si nuestra aplicación demanda recursos computacionales que no necesita por un error el código? En un ambiente local normalmente no pasa a mayores, se va a ver un error en el compilador e incluso puede ser que nuestra computadora se trabe un poco, nada grave. Pero este no es el caso de la computación en la nube. Si a un servicio de nube publica le pides más recursos, te va a dar más. Entonces, una función recursiva o un ciclo infinito en el código pueden tener consecuencias terribles para nuestra cartera. 

Pensar en el comportamiento de los algoritmos y su complejidad de memoria y tiempo es de alta importancia cuando los recursos sobre los que se trabaja son altamente escalables como lo son los servicios en Azure. Debemos de mantener nuestros algoritmos eficientes y nunca pasar a producción código con este tipo de fallos.
### Mala seguridad
En otro caso, ¿qué pasa si alguien o algo está usando recursos de nuestra subscripción sin nuestro consentimiento? Aunque confiemos en que no usamos tanto, existe la posibilidad de que un agente externo use nuestros recursos en la nube sin que lo sepamos, alguien que haya conseguido acceso a nuestra cuenta.
Esta es una vulnerabilidad común si es que no se conoce sobre el correcto manejo de las APIs que se usan. El punto más importante es que nunca debemos mostrar de manera pública las llaves de las APIs que estemos usando, puedes consultar otras mejores prácticas en la [documentación de Google](https://support.google.com/googleapi/answer/6310037?hl=en/ "Google Docs").

## Manejo de costos en Azure

El manejo de costes en la nube es un proceso de constante optimización que debe ser una parte principal cuando se trata se usar la nube, afortunadamente, Azure hace el proceso de manejar y optimizar los costes algo muy fácil, ofreciendo varias herramientas para este proceso.

### Azure Advisor

Azure Advisor es un servicio incluido totalmente gratis en todas las subscripciones de Azure que ayuda con la optimización de costos de uso al dar recomendaciones sobre los recursos ocupados. Estas recomendaciones pueden ser algo sobre lo que podemos actuar para tomar acciones correctivas o preventivas. El servicio de Azure Advisor puede ser una herramienta poderosa no solo para mejorar el manejo de costes de uso, también puede dar recomendaciones de seguridad, rendimiento y fiabilidad de los recursos. Por el momento nos centraremos en su uso para optimización de gastos.

Casi todas las recomendaciones que da este servicio están relacionadas con recursos no utilizados a su máximo potencial. Estos pueden ser desde maquinas virtuales y bases de datos, hasta servicios de redes. 

### Reservaciones
Azure ofrece una manera de comprar instancias de computo de manera anticipada a cambio de un descuento en el precio. Las reservaciones son un acuerdo en el que te comprometes a pagar por planes de productos, la duración de los planes puede ser desde uno hasta tres años y pueden ahorra hasta el 72% de los precios en el modelo ‘pay-as-you-go’.

Azure Advisor es capaz de recomendar reservaciones analizando los datos de uso de cada recurso en los últimos 30 días y genera recomendaciones personalizadas para cada uno e incluyen a los descuentos que vienen incluidos en tus suscripciones (si es que existe dicho descuento)
