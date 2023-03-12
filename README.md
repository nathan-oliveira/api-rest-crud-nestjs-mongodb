$ npm i -g @nestjs/cli
$ nest new project-name

$ npm i --save @nestjs/mongoose mongoose

$ docker pull mongo
$ docker run --name mymongodb -d -p 27018:27017 mongo:latest
$ docker start mymongodb

$ docker container ls

$ nest g resource users
$ npm i --save @nestjs/swagger swagger-ui-express --legacy-peer-deps
$ npm i --save class-validator class-transformer
$ npm i --save @nestjs/typeorm typeorm @nestjs/mapped-types --legacy-peer-deps
$ npm i --save @nestjs/config 

mongodb://localhost:27018/test

######

docker-compose up -d

<!-- docker build -t api-nest:1.0.0 . -->
<!-- docker run --detach --name= api-nest --publish 37017:27017 api-nest:1.0.0 -->
