---
title: Almacenamiento en Azure para desarrolladores
date: 2021-05-05
---

```toc
```
# Introducción

Dentro de los servicios de Azure, los servicios de almacenamiento son fundamentales para el desarrollo de aplicaciones en la nube. Como en los otros servicios, tenemos muchos sabores de almacenamiento dentro de Azure y cada uno tiene sus ventajas y desventajas. 

Aun asi hay ventajas que aplican para todos los servicios, al igual que otros servicios en la nube, el almacenamiento en Azure es totalmente escalable y confiable. Algunos de los beneficios que aplican para todo el almacenamiento en Azure son:
- Recuperación y respaldos automáticos
- Replicación de datos para prevenir pérdidas en caso de que alguna región de Azure falle
- Encriptación de datos
- Soporte de múltiples tipos de bases de datos
- Escalabilidad vertical y horizontal
- Solo pagas lo que usas


Los servicios de almacenamiento que existen en Azure son:
- Azure SQL Database
- Azure Blob Storage
- Azure CosmosDB
- Disk Storage
- Azure Data Lake Storage
- HPC Cache

De estos servicios, por el momento solo vamos a explorar SQL Database y Blob Storage, 
## Azure SQL Databases

Este es un servicio para bases de datos relacionales basado en otro producto de Microsoft, SQL Server. Por esto, lo primero que se hace en este servicio es crear un servidor para guardar la base de datos, estos servidores pueden ser usados para múltiples bases de datos. 
A diferencia de los servicios computacionales, no existe una opción de almacenamiento gratuita dentro de Azure, aunque cuando tenemos una cuenta totalmente nueva, se incluyen 250 GB de almacenamiento válido por 12 meses.

Este servicio es recomendable para trabajar con datos estructurados y relacionales, mientras que Blob Storage es usado para datos sin estructura como imagenes o videos.
### Creando una base de datos en Azure
Para crear servidor SQL en azure podemos usar el portal o bien, la CLI. Para ello debemos usar el siguiente comando:

    az sql server create --admin-user <UsuarioAdministrador> --admin-password <contraseña> --name <nombreServidor> --resource-group <nombreDelGrupoDeRecursos> --location <ubicacionCercana> --enable-public-network <verdadero/falso> 

Con estas instrucciones creamos un servidor, especificando un nombre de usuario y contraseña así como el nombre del servidor para encontrar el servicio en Azure y la ubicación del servicio, recordemos que es recomendable elegir una ubicación cercana al usuario final del servicio. Por último especificamos si queremos dar acceso al público dentro de la red para usar el servicio. 

Como siempre, la seguridad es algo fundamental para cualquier servicio que usemos en la web, por ello también podemos crear reglas para el firewall del servidor que acabamos de crear. Para ello usamos los siguientes comandos desde la CLI:

    az sql server firewall-rule create -g <nombreDelGrupoDeRecursos> -s <nombreServidor> -n <nombreDeRegla> --start-ip-address 0.0.0.0 --end-ip-address 0.0.0.0

Aquí le estamos diciendo a Azure que necesitamos crear una regla de acceso para el firewall, primero especificamos el grupo de recursos al que nuestro servidor pertenece, después le damos el nombre que del recurso, el nombre que deseamos poner a la regla de acceso que estamos creando y por ultimo le damos un rango de direcciones que tienen permitido acceder al recurso.
 
Por último creamos la base de datos dentro de nuestro servidor, usando la línea de comandos podemos usar lo siguiente:

    az sql db create --name <nombreBaseDeDatos> --resource-group <nombreDelGrupoDeRecursos> --server <nombreServidor> --tier <tierRequerido>

Con estas instrucciones creamos una base de datos, el nombre que queramos darle, luego el grupo de recursos al que nuestro servidor pertenece, después le damos el nombre que tiene el servidor y por último especificamos el nivel de servicio que requerimos.

## Azure Blob Storage 

Dentro de Azure, un blob es un tipo de dato que puede almacenar datos sin estructura o binarios, normalmente se ocupa para guardar imágenes o videos. Por su naturaleza, no existe como tal una capacidad de indexado en cada dato, por lo que para hacer un query en la base de datos normalmente implica una mayor latencia comparado con el servicio de SQL. Es por estas características que normalmente usamos este servicio en conjunto con una base de datos a la que podamos hacer queries, por ejemplo, tendremos un servicio de SQL storage para guardar datos de un perfil como el nombre, correo electrónico y número de celular, mientras que la foto de perfil será almacenada en un Blob. 
 
Este servicio también tiene tipos de almacenamiento dependiendo de cada cuánto serán accesados los datos, se clasifican en tres niveles; caliente, frío y de archivo. Entre más veces accesamos los datos el nivel de almacenamiento debería de subir y con ello también subiría el precio del servicio.

### Creando una cuenta de Blob Storage
Usando la linea de comandos podemos crear una cuenta de blob storage de la siguiente manera:

    az storage account create --name <nombreBaseDeDatos> --resource-group <nombreDelGrupoDeRecursos> --location <ubicacionCercana>

Por default, la cuenta es creada de tipo proposito general V2 y de tipo caliente.

Para usar la cuenta necesitamos un contenedor, en la CLI usamos los siguientes comandos 

    az storage container create --account-name <nombreBaseDeDatos> --name <nombreContenedor> --auth-mode <tipoDeAutenticación> --public-access <tipoDeAcceso>


## Usando el almacenamiento de Azure en aplicaciones de Python
Por último, para conectar una aplicación de Azure al almacenamiento necesitamos seguir los siguientes pasos:
1. Crear un servidor de SQL en azure 
2. Obtener el nombre del servidor, necesitamos la dirección completa, que se puede consultar en el portal y tiene la terminación de .database.windows.net
3. El usuario y contraseña de administrador
4. El nombre de la base de datos creada en el servidor

Si quisiéramos conectar la aplicación a almacenamiento en Blob Storage entonces necesitamos tres cosas:
1. Nombre de la cuenta de almacenamiento
2. Llave de acceso a la cuenta de almacenamiento
3. Nombre del contenedor

Para que nuestra aplicación de Python pueda conectarse a un Blob en Azure, necesitamos incluir la librería de Azure Storage Blob, podemos usar pip en la consola de tal manera:

    pip install azure-storage-blob

Y también necesitamos incluirlo en el archivo de requerimientos de nuestra aplicación.


Con el siguiente código podremos conectar nuestras aplicaciones


    from azure.storage.blob import BlobServiceClient
    blob_container = app.config['BLOB_CONTAINER']
    storage_url = "https://{}.blob.core.windows.net/".format(app.config['BLOB_ACCOUNT'])
    blob_service = BlobServiceClient(account_url=storage_url, credential=app.config['BLOB_STORAGE_KEY'])

    blob_client = blob_service.get_blob_client(container=blob_container, blob=filename)
    blob_client.upload_blob(file)


En este snippet, la variable *BLOB CONTAINER* es un archivo de configuración separado de la aplicación en Flask, al igual que *BLOB_ACCOUNT* y *BLOB_STORAGE_KEY* Esto es muy importante para evitar que se compartan estos datos secretos. En un ambiente real es importante separar estos datos al repositorio general, en caso de que queramos compartir nuestro código, no queremos compartir los datos secretos de nuestra cuenta de Azure, para evitar que usen nuestros recursos y nos carguen el servicio a nuestra cuenta.