# **API RESTful - PreEntrega 3 - Grupo 2**

Este proyecto tiene como objetivo desarrollar una plataforma de streaming mediante el uso de Node.js y MySQL, siguiendo el modelo de datos presentado en el archivo trailerflix.json(tp2).




## Tabla de Contenidos
- [**API RESTful - PreEntrega 3 - Grupo 2**](#api-restful---preentrega-3---grupo-2)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Integrantes del grupo de trabajo](#integrantes-del-grupo-de-trabajo)
  - [Configuraciones iniciales](#configuraciones-iniciales)
  - [Uso](#uso)
  - [Endpoints](#endpoints)
  - [Ejemplos de uso](#ejemplos-de-uso)
    - [Obtener todos los productos](#obtener-todos-los-productos)
    - [Obtener el producto con código = 9](#obtener-el-producto-con-código--9)
    - [Buscar un producto por su nombre y/o categoría](#buscar-un-producto-por-su-nombre-yo-categoría)
    - [Agregar un nuevo producto](#agregar-un-nuevo-producto)
    - [Eliminar el producto con el código 1234](#eliminar-el-producto-con-el-código-1234)
  - [Manejo de Errores](#manejo-de-errores)

## Integrantes del grupo de trabajo
- Viviana Beatriz Aguilera Valenzuela 
- Quimey Fernandez Yaryura
- Paula Carolina Serrano

## Configuraciones iniciales
- Detalle de las variables de entorno del archivo .env:
```
PORT=3000
MONGO_URL_STRING=mongodb+srv://vivianaaguilera15:IngeniasVivi2024@clusteringenias.chsesoe.mongodb.net/?retryWrites=true&w=majority&appName=ClusterIngenias
```
- Instalación de dependencias:
```bash
npm install
```

## Uso
1. Iniciar el servidor con alguno de los siguientes comandos:
```bash
npm start
npm run dev
```
2. Acceder a la url del servidor de la forma que creas más conveniente. Recomendamos el uso de Thunder Client.
   
   http://localhost:3000

## Endpoints


| Método | URL                                      | Descripción                                                              | Parámetros                                      | Cuerpo de la Solicitud                  |
|--------|------------------------------------------|--------------------------------------------------------------------------|------------------------------------------------|-----------------------------------------|
| GET    | `/api/trailerflix/`                      | Muestra todos los títulos de las películas y series                      | N/A                                            | N/A                                     |
| GET    | `/api/trailerflix/actores`               | Muestra actrices/actores y sus trabajos fílmicos                         | N/A                                            | N/A                                     |
| GET    | `/api/trailerflix/:nombre`               | Filtra por películas o series específicas que incluyan el parámetro      | `nombre`: Título de película o serie            | N/A                                     |
| GET    | `/api/trailerflix/calificacion`          | Devuelve todos los títulos con una calificación mayor a 5                | N/A                                            | N/A                                     |
| GET    | `/api/trailerflix/categoria/:categoria`  | Filtra todos los títulos por categoría (serie/película)                  | `categoria`: 1: Serie o 2: Película            | N/A                                     |
| GET    | `/api/trailerflix/actor/todos`           | Muestra todos los actores                                                | N/A                                            | N/A                                     |
| GET    | `/api/trailerflix/actor/:nombre`         | Filtra por actor y muestra todos sus títulos                             | `nombre`: Nombre del actor                      | N/A                                     |
| POST   | `/api/trailerflix/`                      | Inserta un nuevo título                                                  | N/A                                            | Producto en formato JSON*               |
| PUT    | `/api/trailerflix/:id`                   | Actualiza una película o serie con el ID indicado                        | `id`: ID de la película o serie                 | Datos del producto en formato JSON*     |
| DELETE | `/api/trailerflix/:id`                   | Elimina una película o serie existente por su ID                         | `id`: ID de la película o serie                 | N/A                                     |
| DELETE | `/api/trailerflix/`                      | Elimina todas las películas o series existentes                         | N/A                                            | N/A                                     |



___*Ejemplos de código para el body:___ 
   ```json
   //POST: para agregar un nuevo producto
{
    "nombre_titulo": "prueba3",
    "id_categoria": 1,
    "id_genero": 3,
    "temporadas": 4,
    "calificacion": 6
  }

  //PUT: para modificar, por ejemplo, el precio del producto.
  {
     "calificacion": 10
  }
```
## Ejemplos de uso
### Obtener todos los productos
GET -> http://localhost:3000/computadoras

![Obtener todos los productos](./img/get.png)

### Obtener el producto con código = 9
GET -> http://localhost:3000/computadoras/9
![Obtener el producto con el código 9](./img/get_id.png)

### Buscar un producto por su nombre y/o categoría
GET -> http://localhost:3000/computadoras/search?nombre=mouse&categoria=acce
![Obtener el producto con nombre=mouse y categoría=acce](./img/search_2p.png)
GET -> http://localhost:3000/computadoras/search?nombre=tecla
![Obtener el producto con nombre=tecla](./img/search_nomb.png)
GET -> http://localhost:3000/computadoras/search?categoria=impres
![Obtener el producto con categoría=impres](./img/search_cat.png)

### Agregar un nuevo producto
POST -> http://localhost:3000/computadoras
![Agregar un nuevo producto](./img/post.png)


### Eliminar el producto con el código 1234
DELETE -> http://localhost:3000/computadoras/1234
![Eliminar un producto](./img/delete.png)

## Manejo de Errores
- 500: Error al conectarse a MongoDB
- 404: Producto no encontrado
- 400: Error en el formato de los datos (parámetros, body)





