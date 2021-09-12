---
title: Docker como ambiente de desarrollo 
date: 2021-09-12
---


```toc
```


# El desarrollo de software es complejo

Esta complejidad a menudo nos lleva a usar muchas herramientas, frameworks y bibliotecas diferentes que hacen que nuestras aplicaciones sean más dependientes de un entorno sólido para brindar no solo la capacidad de ejecutar nuestro software, sino también para mantenerlo seguro y estable para cambios futuros.
La necesidad de un entorno fuerte para la experimentación y el desarrollo solo está aumentando con la llegada de metodologías de trabajo como DevOps, que intentan acelerar aún más el proceso de desarrollo.
Al inicio del ciclo de desarrollo de una nueva app, las herramientas que usamos son solo un puñado de programas sin ninguna personalización requerida. Por ejemplo, Java le ofrece opciones como gradle o maven, .NET principalmente MSBuild y JavaScript webpack o gulp. La mayoría de las veces, solo los instala y está listo para comenzar. Sin embargo, a medida que pasa el tiempo y su aplicación se vuelve más compleja, agregamos nuevas herramientas, nos vemos en la necesidad de personalizar las herramientas existentes, cambiamos la configuración de su sistema operativo, etc.
Este proceso nos puede llevar a una espiral de trabajo tedioso muy facilmente, tenemos que buscar soluciones para este problema.

## Docker como ambiente de desarrollo

Como hemos visto, las herramientas de compilación y los entornos pueden ser difíciles de mantener y ampliar, debemos tener cuidado y asegurarnos de que los entornos de compilación se puedan reproducir fácilmente para que los desarrolladores trabajen lo más rápido posible.

Una herramienta popular que nos ayuda a mantener los entornos estables y listos para funcionar es Docker; sin embargo, también debemos comprender Docker de manera profunda y utilizar las mejores prácticas para sacarle todo el jugo.
Tenemos que tener en cuenta las mejores practicas de una imagen de docker: 
- Mantener imagenes con pocas capas para una construcción rápida.
- Tener un fuerte versionado y control de versiones/artefactos.
- Mantener las imagenes del menor tamaño posible
- Usar herramientas como kaniko o buildkit para mejorar la construcción de las images.


Al usar Docker como entorno de compilación, debemos tener mucho cuidado de no llenar nuestros contenedores de basura. Los entornos de desarrollo tienden a ser bastante pesados y eso no es algo que queremos en producción. Para eso podemos usar algo llamado [multi-stage builds] (https://docs.docker.com/develop/develop-images/multistage-build/). Con esto, Docker usa múltiples declaraciones FROM en cada Dockerfile para entornos bien separados, esto significa que cada declaración FROM creará un contenedor individual y cada contenedor que coloques en tu dockerfile se compilará usando solo un comando.

El uso de multi-stage builds es una gran mejora para la experiencia del desarrollador. La capacidad de Docker para compartir directorios con el sistema host permite a nuestros desarrolladores usar cualquier IDE que deseen, ya que los IDE modernos ya están equipados con compatibilidad con Docker.
Algo realmente útil de esto es que también podemos usar el comando COPY para obtener archivos de contenedores que ni siquiera están en el mismo dockerfile, por ejemplo, la imagen base nginx docker que se puede extraer de DockerHub.


### Al final del dia

Docker puede hacer el proceso de mantener ambientes de desarrollo algo sencillo y sin tener que depender de otras herramientas de manejo de configuración como Ansible. Docker es predecible y facil de consumir, en donde nos evitamos el problema de tener que borrar todo lo instalado en un ambiente de producción. Claro que depende de la situación especifica y si se utilizan los conceptos de Docker correctamente.
