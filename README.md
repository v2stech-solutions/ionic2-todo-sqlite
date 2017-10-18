# GeoLocation-GoogleMap Application with Ionic 2

The **GeoLocation-GoogleMap** is created in Ionic 2 , as well as this is made in order to help people learn and speed up their development process.

This application will help the users to fetch the current geo-location of user and it will plot that location on google-map.

## Installations

To run the application we have to install some packages and plugins which are as follows:

``` sh
$ npm install @agm/core --save

```

```sh
$ ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="YOUR DESCRIPTION"
```

```sh
$ npm install --save @ionic-native/geolocation
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
