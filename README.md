# ToDo Application with Sqlite Database Ionic 2

The **ToDo Application** is created in Ionic 2 , as well as this is made in order to help people learn and speed up their development process.

The application uses the sqlite database to store the values which are entered by the user from your mobile application.The sqlite creates the database inside your device memory.

The application will help all the users to perform **CRUD operations** using sqlite database.

The application contains two pages i.e HomePage which will list all the added ToDo's which are stored in databse table  and AddToDoPage which will allow you to save the todo in database table.

## Installations

To run the application we have to install some packages and plugins which are as follows:

``` sh
$ ionic cordova plugin add cordova-sqlite-storage

```
``` sh
$ npm install --save @ionic/storage
```

## Launching Application

To run the application on browser use following command

```sh

$ ionic serve
```

To run the application on your mobile device use the following command
```sh
$ ionic cordova run android
```

```sh
$ ionic cordova run ios
