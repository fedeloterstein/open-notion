# Next.js Open Notion

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

* El -d, significa __detached__


MongoDb URL Local
```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__


* Recontruir laos modulos de node y levantar Next
```
yarn install
yarn dev
```
## LLenar la base de datos con informacion de pruebas

Llamar a:
```
http://localhost:3000/api/seed
```

